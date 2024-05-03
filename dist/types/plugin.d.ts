import { BaseInputParams, InputBindingPlugin } from '@tweakpane/core';
export interface PluginInputParams extends BaseInputParams {
    max?: number;
    min?: number;
    step?: number;
    view: 'stepper';
}
export declare const TemplateInputPlugin: InputBindingPlugin<number, number, PluginInputParams>;
