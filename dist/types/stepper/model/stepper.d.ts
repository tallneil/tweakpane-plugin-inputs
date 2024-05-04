import { PointNdAssembly } from '@tweakpane/core';
export interface StepperObject {
    val: number;
}
export declare class Stepper {
    val: number;
    constructor(val: number);
    static isObject(obj: unknown): obj is StepperObject;
    get getValue(): number;
    toObject(): StepperObject;
}
export declare const StepperAssembly: PointNdAssembly<Stepper>;
