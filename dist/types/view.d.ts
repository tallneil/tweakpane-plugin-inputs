import { Value, View, ViewProps } from '@tweakpane/core';
interface Config {
    value: Value<number>;
    viewProps: ViewProps;
}
export declare class PluginView implements View {
    readonly element: HTMLElement;
    private value_;
    private dotElems_;
    private textElem_;
    constructor(doc: Document, config: Config);
    private refresh_;
    private onValueChange_;
}
export {};
