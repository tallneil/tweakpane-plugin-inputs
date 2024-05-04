import { Value, View, ViewProps } from '@tweakpane/core';
import { Stepper } from '../model/stepper.js';
interface Config {
    value: Value<Stepper>;
    viewProps: ViewProps;
}
export declare class StepperPluginView implements View {
    readonly element: HTMLElement;
    private value_;
    private btnMinus;
    private btnPlus;
    private numInput;
    constructor(doc: Document, config: Config);
    private refresh_;
    private onValueChange_;
}
export {};
