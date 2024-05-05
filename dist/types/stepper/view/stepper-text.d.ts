import { PointNdTextController, View } from '@tweakpane/core';
import { StepperButtonsView } from './stepper-buttons.js';
interface Config {
    buttonsView: StepperButtonsView;
    textView: PointNdTextController<number>['view'];
}
export declare class StepperTextView implements View {
    readonly element: HTMLElement;
    private buttonsView_;
    private textView_;
    constructor(doc: Document, config: Config);
}
export {};
