import { BaseInputParams, InputBindingPlugin, NumberInputParams } from '@tweakpane/core';
interface StepperInputParams extends NumberInputParams, BaseInputParams {
    min?: number;
    max?: number;
    step?: number;
    view: 'stepper';
}
export declare const StepperInputPlugin: InputBindingPlugin<number, number, StepperInputParams>;
export {};
