import {
	BaseInputParams,
	createNumberTextInputParamsParser,
	createNumberTextPropsObject,
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

interface StepperInputParams extends NumberInputParams, BaseInputParams {}

export const StepperInputPlugin: InputBindingPlugin<
	Stepper,
	StepperObject,
	StepperInputParams
> = createPlugin({
	id: 'input-stepper',
	type: 'input',

	accept: (exValue, params) => {
		if (!Stepper.isObject(exValue)) {
			return null;
		}

		const result = parseRecord<StepperInputParams>(params, (p) => ({
			...createNumberTextInputParamsParser(p),
			readonly: p.optional.constant(false),
		}));
		return result? {
			initialValue: new Stepper(exValue.val),
			params: result,
		} : null;
	},
	binding: {
		reader: (_args) => stepperFromUnknown,
		writer: (_args) => writeStepper,
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

		// const axis = {
		// 	textProps: textProps,
		// } as PointAxis;

		// return new PointNdTextController(args.document, {
		// 	assembly: StepperAssembly,
		// 	axes: [axis], // axes: [axis, axis],
		// 	parser: parseNumber,
		// 	value: v,
		// 	viewProps: args.viewProps,
		// });
	},
});
