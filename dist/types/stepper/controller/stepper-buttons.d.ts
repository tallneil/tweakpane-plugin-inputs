import { Value, ValueController, ViewProps } from '@tweakpane/core';
import { StepperButtonsView } from '../view/stepper-buttons.js';
import { StepperConstraint } from '../constraint/stepper.js';
interface Config {
    value: Value<number>;
    viewProps: ViewProps;
    constraint: StepperConstraint | undefined;
}
export declare class StepperButtonsController implements ValueController<number, StepperButtonsView> {
    readonly value: Value<number>;
    readonly view: StepperButtonsView;
    readonly viewProps: ViewProps;
    readonly step: number;
    constructor(doc: Document, config: Config);
}
export {};
