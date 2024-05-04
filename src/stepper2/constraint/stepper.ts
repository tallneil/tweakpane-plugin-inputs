import {Constraint} from '@tweakpane/core';
import {Stepper} from '../model/stepper.js';

export class StepperConstraint implements Constraint<Stepper> {
	public readonly edge: Constraint<number> | undefined;

	constructor(edge?: Constraint<number>) {
		this.edge = edge;
	}

	constrain(value: Stepper): Stepper {
        return value;
	}
}
