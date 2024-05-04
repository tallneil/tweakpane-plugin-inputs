import {
	Controller,
	Value,
	ViewProps,
} from '@tweakpane/core';

import {Stepper} from '../model/stepper.js';
import {StepperPluginView} from '../view/stepper.js';

interface Config {
	value: Value<Stepper>;
	viewProps: ViewProps;
}

// Custom controller class should implement `Controller` interface
export class StepperController implements Controller<StepperPluginView> {
	public readonly value: Value<Stepper>;
	public readonly view: StepperPluginView;
	public readonly viewProps: ViewProps;

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

		// Handle user interaction
		// this.view.buttonElement.addEventListener('click', () => {
		// 	// Update a model
		// 	this.value.rawValue += 1;
		// });
	}
}