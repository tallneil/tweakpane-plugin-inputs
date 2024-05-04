import {BindingTarget} from '@tweakpane/core';
import {Stepper} from '../model/stepper.js';

// reader
export function stepperFromUnknown(exValue: unknown): Stepper {
	// Convert an external unknown value into the internal value

	console.log(Stepper.isObject(exValue)
	? exValue.val
	: 0);

	return Stepper.isObject(exValue)
		? new Stepper(exValue.val)
		: new Stepper(0);

	// return (exValue: unknown): number => {
	// 	// Convert an external unknown value into the internal value
	// 	return typeof exValue === 'number' ? exValue : 0;
	// };
}

// writer
export function writeStepper(target: BindingTarget, inValue: Stepper): void {
	// 	Use `target.write()` to write the primitive value to the target,
	// 	or `target.writeProperty()` to write a property of the target
	
	target.write(inValue);
	// target.writeProperty('val', inValue.val);
}