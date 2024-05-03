import { Controller, Value, ViewProps } from '@tweakpane/core';
import { PluginView } from './view.js';
interface Config {
    value: Value<number>;
    viewProps: ViewProps;
}
export declare class PluginController implements Controller<PluginView> {
    readonly value: Value<number>;
    readonly view: PluginView;
    readonly viewProps: ViewProps;
    constructor(doc: Document, config: Config);
    private onPoint_;
}
export {};
