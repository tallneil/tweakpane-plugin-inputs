import { Controller, Value, ViewProps } from '@tweakpane/core';
import { DotsView } from '../view/dots.js';
interface Config {
    value: Value<number>;
    viewProps: ViewProps;
}
export declare class DotsController implements Controller<DotsView> {
    readonly value: Value<number>;
    readonly view: DotsView;
    readonly viewProps: ViewProps;
    constructor(doc: Document, config: Config);
    private onPoint_;
}
export {};
