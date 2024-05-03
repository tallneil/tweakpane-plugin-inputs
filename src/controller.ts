import {
	ButtonController,
	ButtonPropsObject,
	constrainRange,
	Controller,
	PointNdTextController,
	parseNumber,
	Value,
	ViewProps,
} from '@tweakpane/core';

import {Stepper, StepperAssembly} from './stepper.js';
import {StepperPluginView} from './view.js';

interface Config {
	value: Value<Stepper>;
	viewProps: ViewProps;
}

// Custom controller class should implement `Controller` interface
export class StepperController implements Controller<StepperPluginView> {
	public readonly value: Value<Stepper>;
	public readonly view: StepperPluginView;
	public readonly viewProps: ViewProps;
	//private readonly tc_: PointNdTextController<Stepper>;

	constructor(doc: Document, config: Config) {
		// Receive the bound value from the plugin
		this.value = config.value;

		// and also view props
		this.viewProps = config.viewProps;
		this.viewProps.handleDispose(() => {
			// Called when the controller is disposing
			console.log('TODO: dispose controller');
		});

		// Create a custom view
		this.view = new StepperPluginView(doc, {
			value: this.value,
			viewProps: this.viewProps,
		});

		// this.tc_ = new PointNdTextController(doc, {
		// 	assembly: StepperAssembly,
		// 	parser: parseNumber,
		// 	value: this.value,
		// 	viewProps: this.viewProps,
		// });
		// this.view.textElement.appendChild(this.tc_.view.element);


		// Handle user interaction
		// this.view.buttonElement.addEventListener('click', () => {
		// 	// Update a model
		// 	this.value.rawValue += 1;
		// });
	}
}