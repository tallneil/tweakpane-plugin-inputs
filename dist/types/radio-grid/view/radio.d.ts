import { ValueMap, View, ViewProps } from '@tweakpane/core';
export type RadioPropsObject = {
    title: string;
};
export type RadioProps = ValueMap<RadioPropsObject>;
interface Config {
    name: string;
    props: RadioProps;
    viewProps: ViewProps;
}
export declare class RadioView implements View {
    readonly element: HTMLElement;
    readonly inputElement: HTMLInputElement;
    constructor(doc: Document, config: Config);
}
export {};
