import { Value, View, ViewProps } from '@tweakpane/core';
interface Config {
    value: Value<number>;
    viewProps: ViewProps;
}
export declare class StepperButtonsView implements View {
    readonly element: HTMLElement;
    readonly btnMinus: HTMLElement;
    readonly btnPlus: HTMLElement;
    constructor(doc: Document, config: Config);
}
export {};
