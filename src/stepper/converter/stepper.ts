import {BindingTarget} from '@tweakpane/core';
import {Stepper} from '../model/stepper.js';

export function stepperFromUnknown(value: unknown): Stepper {
	return Stepper.isObject(value)
		? new Stepper(value.val)
		: new Stepper(0);
}

export function writeStepper(target: BindingTarget, value: Stepper): void {
	target.writeProperty('val', value.val);
}
