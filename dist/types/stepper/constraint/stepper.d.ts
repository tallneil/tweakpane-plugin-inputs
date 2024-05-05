import { Constraint } from '@tweakpane/core';
export declare class StepperConstraint implements Constraint<number> {
    readonly step: number;
    readonly edge: Constraint<number> | undefined;
    constructor(step: number, edge?: Constraint<number>);
    constrain(value: number): number;
}
