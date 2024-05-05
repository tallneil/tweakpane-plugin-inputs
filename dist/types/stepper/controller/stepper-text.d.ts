import { NumberTextProps, Parser, PointNdTextController, Value, ValueController, ViewProps } from '@tweakpane/core';
import { StepperTextView } from '../view/stepper-text.js';
import { StepperConstraint } from '../constraint/stepper.js';
interface Config {
    constraint: StepperConstraint;
    parser: Parser<number>;
    textProps: NumberTextProps;
    value: Value<number>;
    viewProps: ViewProps;
}
export declare class StepperTextController implements ValueController<number, StepperTextView> {
    readonly value: Value<number>;
    readonly view: StepperTextView;
    readonly viewProps: ViewProps;
    private readonly sc_;
    private readonly tc_;
    constructor(doc: Document, config: Config);
    get textController(): PointNdTextController<number>;
}
export {};
