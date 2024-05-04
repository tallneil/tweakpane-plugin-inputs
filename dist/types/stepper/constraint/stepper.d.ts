import { Constraint } from '@tweakpane/core';
import { Stepper } from '../model/stepper.js';
export declare class StepperConstraint implements Constraint<Stepper> {
    readonly edge: Constraint<number> | undefined;
    constructor(edge?: Constraint<number>);
    constrain(value: Stepper): Stepper;
}
