import {
	BaseInputParams,
	CompositeConstraint,
	createPlugin,
	Constraint,
	createRangeConstraint,
	createStepConstraint,
	InputBindingPlugin,
	NumberInputParams,
	parseRecord,
} from '@tweakpane/core';

import {StepperController} from './controller.js';
import {Stepper, StepperObject} from './stepper.js';
import {stepperFromUnknown, writeStepper} from './converter.js';
import {StepperConstraint} from './constraint.js';

export interface StepperInputParams extends NumberInputParams, BaseInputParams {
	max?: number;
	min?: number;
	step?: number;
	view: 'stepper';
}

function createConstraint(params: StepperInputParams): Constraint<Stepper> {
	const constraints = [];
	const rc = createRangeConstraint(params);
	if (rc) {
		constraints.push(rc);
	}
	const sc = createStepConstraint(params);
	if (sc) {
		constraints.push(sc);
	}

	return new StepperConstraint(new CompositeConstraint(constraints));
}

// NOTE: JSDoc comments of `InputBindingPlugin` can be useful to know details about each property
//
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
//
export const StepperInputPlugin: InputBindingPlugin<
	Stepper,
	StepperObject,
	StepperInputParams
> = createPlugin({
	id: 'input-stepper',
	type: 'input',

	accept(exValue: unknown, params: Record<string, unknown>) {
		if (!Stepper.isObject(exValue)) {
			return null;
		}

		// Parse parameters object
		const result = parseRecord<StepperInputParams>(params, (p) => ({
			// `view` option may be useful to provide a custom control for primitive values
			view: p.required.constant('stepper'),
			max: p.optional.number,
			min: p.optional.number,
			step: p.optional.number ?? 1,
		}));
		if (!result) {
			return null;
		}

		// Return a typed value and params to accept the user input
		return {
			initialValue: exValue,
			params: result,
		};
	},

	binding: {
		reader: (_args) => stepperFromUnknown,
		constraint: (args) => createConstraint(args.params),
		writer: (_args) => writeStepper,
	},

	controller(args) {
		// Create a controller for the plugin
		return new StepperController(args.document, {
			value: args.value,
			viewProps: args.viewProps,
		});
	},
});
