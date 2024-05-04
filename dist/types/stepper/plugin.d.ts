import { BaseInputParams, InputBindingPlugin, NumberInputParams } from '@tweakpane/core';
import { Stepper, StepperObject } from './model/stepper.js';
export interface StepperInputParams extends NumberInputParams, BaseInputParams {
    max?: number;
    min?: number;
    step?: number;
    view: 'stepper';
}
export declare const StepperInputPlugin: InputBindingPlugin<Stepper, StepperObject, StepperInputParams>;
