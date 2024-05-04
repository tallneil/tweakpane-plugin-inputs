// import {
// 	Constraint,
// 	NumberTextProps,
// 	Parser,
// 	PointAxis,
// 	PointNdTextController,
// 	SliderProps,
// 	Value,
// 	ValueController,
// 	ViewProps,
// } from '@tweakpane/core';

// import {Stepper, StepperAssembly} from '../model/stepper.js';
// import {RangeSliderTextView} from '../view/range-slider-text.js';
// import {RangeSliderController} from './range-slider.js';

// interface Config {
// 	constraint: Constraint<number> | undefined;
// 	parser: Parser<number>;
// 	sliderProps: SliderProps;
// 	textProps: NumberTextProps;
// 	value: Value<Stepper>;
// 	viewProps: ViewProps;
// }

// export class RangeSliderTextController
// 	implements ValueController<Stepper, RangeSliderTextView>
// {
// 	public readonly value: Value<Stepper>;
// 	public readonly view: RangeSliderTextView;
// 	public readonly viewProps: ViewProps;
// 	private readonly sc_: RangeSliderController;
// 	private readonly tc_: PointNdTextController<Stepper>;

// 	constructor(doc: Document, config: Config) {
// 		this.value = config.value;
// 		this.viewProps = config.viewProps;

// 		this.sc_ = new RangeSliderController(doc, config);

// 		const axis = {
// 			constraint: config.constraint,
// 			textProps: config.textProps,
// 		} as PointAxis;
// 		this.tc_ = new PointNdTextController(doc, {
// 			assembly: IntervalAssembly,
// 			axes: [axis, axis],
// 			parser: config.parser,
// 			value: this.value,
// 			viewProps: config.viewProps,
// 		});

// 		this.view = new RangeSliderTextView(doc, {
// 			sliderView: this.sc_.view,
// 			textView: this.tc_.view,
// 		});
// 	}

// 	public get textController(): PointNdTextController<Stepper> {
// 		return this.tc_;
// 	}
// }
