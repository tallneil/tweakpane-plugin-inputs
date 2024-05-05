import { PointNdAssembly } from '@tweakpane/core';
export interface StepperObject {
    val: number;
}
export declare class Stepper {
    val: number;
    constructor(val: number);
    static isObject(obj: unknown): obj is StepperObject;
    static equals(v1: Stepper, v2: Stepper): boolean;
    toObject(): StepperObject;
}
export declare const StepperAssembly: PointNdAssembly<number>;
