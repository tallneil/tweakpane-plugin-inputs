import {
	Value,
	ValueController,
	ViewProps,
} from '@tweakpane/core';

import {Stepper} from '../model/stepper.js';
import {StepperButtonsView} from '../view/stepper-buttons.js';

interface Config {
	value: Value<Stepper>;
	viewProps: ViewProps;
}

export class StepperButtonsController implements ValueController<Stepper, StepperButtonsView>{
	public readonly value: Value<Stepper>;
	public readonly view: StepperButtonsView;
	public readonly viewProps: ViewProps;

	constructor(doc: Document, config: Config) {
		this.value = config.value;
		this.viewProps = config.viewProps;
		this.view = new StepperButtonsView(doc, {
			value: this.value,
			viewProps: config.viewProps,
		});
		
		this.view.btnMinus.addEventListener('click', () => {
			const v = this.value.rawValue.val ?? 0;
			const step = 1; // fill this out 
			const nv = v - step;
			this.value.setRawValue(new Stepper(nv), {
				forceEmit: true,
				last: true,
			});
		});

		this.view.btnPlus.addEventListener('click', () => {
			const v = this.value.rawValue.val ?? 0;
			const step = 1; // fill this out 
			const nv = v + step;
			this.value.setRawValue(new Stepper(nv), {
				forceEmit: true,
				last: true,
			});
		});
	}
}
