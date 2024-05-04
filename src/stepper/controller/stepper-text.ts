import {
	NumberTextProps,
	Parser,
	PointAxis,
	PointNdTextController,
	Value,
	ValueController,
	ViewProps,
} from '@tweakpane/core';

import {Stepper, StepperAssembly} from '../model/stepper.js';
import {StepperTextView} from '../view/stepper-text.js';
import {StepperButtonsController} from './stepper-buttons.js';

interface Config {
	parser: Parser<number>;
	textProps: NumberTextProps;
	value: Value<Stepper>;
	viewProps: ViewProps;
}

export class StepperTextController implements ValueController<Stepper, StepperTextView> {
	public readonly value: Value<Stepper>;
	public readonly view: StepperTextView;
	public readonly viewProps: ViewProps;
	private readonly sc_: StepperButtonsController;
	private readonly tc_: PointNdTextController<Stepper>;

	constructor(doc: Document, config: Config) {
		this.value = config.value;
		this.viewProps = config.viewProps;
		this.sc_ = new StepperButtonsController(doc, config);

		const axis = {
			textProps: config.textProps,
		} as PointAxis;
		this.tc_ = new PointNdTextController(doc, {
			assembly: StepperAssembly,
			axes: [axis],// axes: [axis, axis], // is this where the 2 fields are being created?
			parser: config.parser,
			value: this.value,
			viewProps: config.viewProps,
		});

		this.view = new StepperTextView(doc, {
			buttonsView: this.sc_.view,
			textView: this.tc_.view,
		});
	}

	public get textController(): PointNdTextController<Stepper> {
		return this.tc_;
	}
}
