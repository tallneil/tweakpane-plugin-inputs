import {ClassName, mapRange, Value, View, ViewProps} from '@tweakpane/core';

interface Config {
	value: Value<number>;
	viewProps: ViewProps;
}

// Create a class name generator from the view name
// ClassName('tmp') will generate a CSS class name like `tp-tmpv`
const className = ClassName('step');

// Custom view class should implement `View` interface
export class PluginView implements View {
	public readonly element: HTMLElement;
	private value_: Value<number>;
	private btnMinus: HTMLElement;
	private btnPlus: HTMLElement;
	private numInput: HTMLElement;

	constructor(doc: Document, config: Config) {
		// Create a root element for the plugin
		this.element = doc.createElement('div');
		this.element.classList.add(className());
		// Bind view props to the element
		config.viewProps.bindClassModifiers(this.element);

		// Receive the bound value from the controller
		this.value_ = config.value;
		// Handle 'change' event of the value
		this.value_.emitter.on('change', this.onValueChange_.bind(this));

		// Create child elements
		this.btnMinus = doc.createElement('button');
		this.btnMinus.textContent = '-';
		this.btnMinus.classList.add(className('b'));
		this.element.appendChild(this.btnMinus);

		this.btnPlus = doc.createElement('button');
		this.btnPlus.textContent = '+';
		this.btnPlus.classList.add(className('b'));
		this.element.appendChild(this.btnPlus);

		this.numInput = doc.createElement('input');
		this.numInput.classList.add(className('i'));
		this.element.appendChild(this.numInput);

		// Apply the initial value
		this.refresh_();

		config.viewProps.handleDispose(() => {
			// Called when the view is disposing
			console.log('TODO: dispose view');
		});
	}

	private refresh_(): void {
		const rawValue = this.value_.rawValue;
		this.numInput.textContent = rawValue.toFixed(2);
	}

	private onValueChange_() {
		this.refresh_();
	}
}
