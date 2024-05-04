import {
	BaseInputParams,
	BindingTarget,
	createNumberTextInputParamsParser,
	createRangeConstraint,
	createNumberTextPropsObject,
	CompositeConstraint,
	createStepConstraint,
	createPlugin,
	InputBindingPlugin,
	NumberInputParams,
	parseNumber,
	parseRecord,
	ValueMap,
} from '@tweakpane/core';

import {StepperTextController} from './controller/stepper-text.js';
import {stepperFromUnknown, writeStepper} from './converter/stepper.js';
import {Stepper, StepperAssembly, StepperObject} from './model/stepper.js';

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

		// const result = parseRecord<StepperInputParams>(params, (p) => ({
		// 	view: p.required.constant('stepper'),
		// 	// ...createNumberTextInputParamsParser(p),
		// 	// readonly: p.optional.constant(false),
		// }));
		// return result ? {
		// 	initialValue: new Stepper(exValue.val),
		// 	params: result,
		// } : null;
	},
	binding: {
		reader: (_args) => stepperFromUnknown,
		writer: (_args) => writeStepper,

		// reader(_args) {

		// 	return Stepper.isObject(_args)
		// 	? new Stepper(_args.val)
		// 	: new Stepper(0);

		// 	// return (exValue: unknown): number => {
		// 	// 	// Convert an external unknown value into the internal value
		// 	// 	return typeof exValue === 'number' ? exValue : 0;
		// 	// };
		// },

		// constraint(args) {
		// 	// Create a value constraint from the user input
		// 	const constraints = [];
		// 	const cr = createRangeConstraint(args.params);
		// 	if (cr) {
		// 		constraints.push(cr);
		// 	}
		// 	const cs = createStepConstraint(args.params);
		// 	if (cs) {
		// 		constraints.push(cs);
		// 	}
		// 	// Use `CompositeConstraint` to combine multiple constraints
		// 	return new CompositeConstraint(constraints);
		// },

		// writer(_args) {
		// 	return (target: BindingTarget, inValue) => {
		// 		// Use `target.write()` to write the primitive value to the target,
		// 		// or `target.writeProperty()` to write a property of the target
		// 		target.write(inValue);
		// 	};
		// },

	},
	controller(args) {
		const v = args.value;
		const textProps = ValueMap.fromObject(
			createNumberTextPropsObject(args.params, v.rawValue.val),
		);

		return new StepperTextController(args.document, {
			parser: parseNumber,
			textProps: textProps,
			value: v,
			viewProps: args.viewProps,
		});

		// return new StepperTextController(args.document, {
		// 	parser: parseNumber,
		// 	textProps: textProps,
		// 	value: v,
		// 	viewProps: args.viewProps,
		// });

		// return new StepperTextController(args.document, {
		// 	value: new Stepper(args.value.rawValue),
		// 	viewProps: args.viewProps,
		// });
	},
});





/*

import {
	BaseInputParams,
	BindingTarget,
	CompositeConstraint,
	createPlugin,
	createRangeConstraint,
	createStepConstraint,
	InputBindingPlugin,
	parseRecord,
} from '@tweakpane/core';

import {PluginController} from './controller.js';

export interface PluginInputParams extends BaseInputParams {
	max?: number;
	min?: number;
	step?: number;
	view: 'stepper';
}

// NOTE: JSDoc comments of `InputBindingPlugin` can be useful to know details about each property
//
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
//
export const StepperInputPlugin: InputBindingPlugin<
	number,
	number,
	PluginInputParams
> = createPlugin({
	id: 'stepperInput',

	// type: The plugin type.
	// - 'input': Input binding
	// - 'monitor': Monitor binding
	// - 'blade': Blade without binding
	type: 'input',

	accept(exValue: unknown, params: Record<string, unknown>) {
		if (typeof exValue !== 'number') {
			// Return null to deny the user input
			return null;
		}

		// Parse parameters object
		const result = parseRecord<PluginInputParams>(params, (p) => ({
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
		reader(_args) {
			return (exValue: unknown): number => {
				// Convert an external unknown value into the internal value
				return typeof exValue === 'number' ? exValue : 0;
			};
		},

		constraint(args) {
			// Create a value constraint from the user input
			const constraints = [];
			// You can reuse existing functions of the default plugins
			const cr = createRangeConstraint(args.params);
			if (cr) {
				constraints.push(cr);
			}
			const cs = createStepConstraint(args.params);
			if (cs) {
				constraints.push(cs);
			}
			// Use `CompositeConstraint` to combine multiple constraints
			return new CompositeConstraint(constraints);
		},

		writer(_args) {
			return (target: BindingTarget, inValue) => {
				// Use `target.write()` to write the primitive value to the target,
				// or `target.writeProperty()` to write a property of the target
				target.write(inValue);
			};
		},
	},

	controller(args) {
		// Create a controller for the plugin
		return new PluginController(args.document, {
			value: args.value,
			viewProps: args.viewProps,
		});
	},
});

*/