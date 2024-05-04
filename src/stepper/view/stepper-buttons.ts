import {
	ClassName,
	Value,
	View,
	ViewProps,
} from '@tweakpane/core';

import {Stepper} from '../model/stepper.js';

interface Config {
	value: Value<Stepper>;
	viewProps: ViewProps;
}

const className = ClassName('step');

export class StepperButtonsView implements View {
	public readonly element: HTMLElement;
	public readonly btnMinus: HTMLElement;
	public readonly btnPlus: HTMLElement;
	// private readonly value_: Value<Stepper>;

	constructor(doc: Document, config: Config) {
		// this.onButtonPropsChange_ = this.onButtonPropsChange_.bind(this);
		// this.onValueChange_ = this.onValueChange_.bind(this);
		// this.buttonProps_ = config.buttonProps;

		this.element = doc.createElement('div');
		this.element.classList.add(className());
		config.viewProps.bindClassModifiers(this.element);

		const btnMinus = doc.createElement('button');
		btnMinus.textContent = '-';
		btnMinus.classList.add(className('b'));
		config.viewProps.bindDisabled(btnMinus);
		this.element.appendChild(btnMinus);
		this.btnMinus = btnMinus;

		const btnPlus = doc.createElement('button');
		btnPlus.textContent = '+';
		btnPlus.classList.add(className('b'));
		config.viewProps.bindDisabled(btnPlus);
		this.element.appendChild(btnPlus);
		this.btnPlus = btnPlus;

		//this.update_();
	}

	// private update_(): void {
	// }
}
