import {ClassName, PointNdTextController, View} from '@tweakpane/core';
import {StepperButtonsView} from './stepper-buttons.js';

interface Config {
	buttonsView: StepperButtonsView;
	textView: PointNdTextController<number>['view'];
}

const className = ClassName('step'); 

export class StepperTextView implements View {
	public readonly element: HTMLElement;
	private buttonsView_: StepperButtonsView;
	private textView_: PointNdTextController<InputEvent>['view'];

	constructor(doc: Document, config: Config) {
		this.buttonsView_ = config.buttonsView;
		this.textView_ = config.textView;

		this.element = doc.createElement('div');
		this.element.classList.add(className());

		const buttonsElem = doc.createElement('div');
		buttonsElem.classList.add(className('s')); 
		buttonsElem.appendChild(this.buttonsView_.element);
		this.element.appendChild(buttonsElem);

		const textElem = doc.createElement('div');
		textElem.classList.add(className('t'));
		textElem.appendChild(this.textView_.element);
		this.element.appendChild(textElem);
	}
}
