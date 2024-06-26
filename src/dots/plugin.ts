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

import {DotsController} from './controller/dots.js';

export interface DotsInputParams extends BaseInputParams {
	max?: number;
	min?: number;
	step?: number;
	view: 'dots';
}

// NOTE: JSDoc comments of `InputBindingPlugin` can be useful to know details about each property
//
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
//
export const DotsInputPlugin: InputBindingPlugin<
	number,
	number,
	DotsInputParams
> = createPlugin({
	id: 'input-dots',

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
		const result = parseRecord<DotsInputParams>(params, (p) => ({
			// `view` option may be useful to provide a custom control for primitive values
			view: p.required.constant('dots'),
			max: p.optional.number,
			min: p.optional.number,
			step: p.optional.number,
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
		return new DotsController(args.document, {
			value: args.value,
			viewProps: args.viewProps,
		});
	},
});
