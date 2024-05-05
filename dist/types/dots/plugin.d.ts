import { BaseInputParams, InputBindingPlugin } from '@tweakpane/core';
export interface DotsInputParams extends BaseInputParams {
    max?: number;
    min?: number;
    step?: number;
    view: 'dots';
}
export declare const DotsInputPlugin: InputBindingPlugin<number, number, DotsInputParams>;
