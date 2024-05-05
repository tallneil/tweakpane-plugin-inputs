import {Constraint} from '@tweakpane/core';
import {Stepper} from '../model/stepper.js';

export class StepperConstraint implements Constraint<number> {
	public readonly step: number;
	public readonly edge: Constraint<number> | undefined;

	constructor(step: number, edge?: Constraint<number>) {
		this.step = step;
		this.edge = edge;
	}

	constrain(value: number): number {
        return this.edge?.constrain(value) ?? value;
	}
}
