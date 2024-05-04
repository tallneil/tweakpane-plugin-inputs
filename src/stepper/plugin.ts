import {
	BaseInputParams,
	Constraint,
	createNumberTextPropsObject,
	createPlugin,
	createRangeConstraint,
	CompositeConstraint,
	createStepConstraint,
	InputBindingPlugin,
	NumberInputParams,
	parseNumber,
	parseRecord,
	ValueMap,
	TpError,
} from '@tweakpane/core';

import {StepperTextController} from './controller/stepper-text.js';
import {stepperFromUnknown, writeStepper} from './converter/stepper.js';
import {Stepper, StepperAssembly, StepperObject} from './model/stepper.js';
import {StepperConstraint} from './constraint/stepper.js';

interface StepperInputParams extends NumberInputParams, BaseInputParams {
	min?: number;
	max?: number;
	step?: number;
	view: 'stepper';
}

// NOTE: JSDoc comments of `InputBindingPlugin` can be useful to know details about each property
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
export const StepperInputPlugin: InputBindingPlugin<
	Stepper,
	StepperObject, 
	StepperInputParams
> = createPlugin({
	id: 'input-stepper',
	type: 'input',

	accept: (exValue, params) => {
		if (typeof exValue !== 'number') {
			return null;
		}

		const result = parseRecord<StepperInputParams>(params, (p) => ({
			// `view` option may be useful to provide a custom control for primitive values
			view: p.required.constant('stepper'),
			max: p.optional.number,
			min: p.optional.number,
			step: p.optional.number ?? 1,
		}));

		// Return a typed value and params to accept the user input
		return result ? {
			initialValue: new Stepper(exValue),
			params: result,
		} : null; 
	},
	binding: {
		reader: (_args) => stepperFromUnknown,
		writer: (_args) => writeStepper,

		//constraint: (args) => createConstraint(args.params),

		constraint(args) {
			const constraints = [];
			const cr = createRangeConstraint(args.params);
			if (cr) {
				constraints.push(cr);
			}
			const cs = createStepConstraint(args.params);
			if (cs) {
				constraints.push(cs);
			}
			// Use `CompositeConstraint` to combine multiple constraints
			return new StepperConstraint(new CompositeConstraint(constraints));
		},
	},
	controller(args) {
		const v = args.value;
		const c = args.constraint;
		if (!(c instanceof StepperConstraint)) {
			throw TpError.shouldNeverHappen();
		}

		const textProps = ValueMap.fromObject(
			createNumberTextPropsObject(args.params, v.rawValue.val),
		);

		return new StepperTextController(args.document, {
			constraint: c.edge,
			parser: parseNumber,
			textProps: textProps,
			value: v,
			viewProps: args.viewProps,
		});
	},
});
