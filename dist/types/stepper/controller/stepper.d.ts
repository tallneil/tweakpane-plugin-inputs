import { Controller, Value, ViewProps } from '@tweakpane/core';
import { Stepper } from '../model/stepper.js';
import { StepperPluginView } from '../view/stepper.js';
interface Config {
    value: Value<Stepper>;
    viewProps: ViewProps;
}
export declare class StepperController implements Controller<StepperPluginView> {
    readonly value: Value<Stepper>;
    readonly view: StepperPluginView;
    readonly viewProps: ViewProps;
    constructor(doc: Document, config: Config);
}
export {};
