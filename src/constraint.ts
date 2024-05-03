import {Constraint} from '@tweakpane/core';
import {Stepper} from './stepper.js';

export class StepperConstraint implements Constraint<Stepper> {
	public readonly edge: Constraint<number> | undefined;

	constructor(edge?: Constraint<number>) {
		this.edge = edge;
	}

	constrain(value: Stepper): Stepper {
        return value;
		// if (value.min <= value.max) {
		// 	return new Interval(
		// 		this.edge?.constrain(value.min) ?? value.min,
		// 		this.edge?.constrain(value.max) ?? value.max,
		// 	);
		// }
		// const c = (value.min + value.max) / 2;
		// return new Interval(
		// 	this.edge?.constrain(c) ?? c,
		// 	this.edge?.constrain(c) ?? c,
		// );
	}
}
