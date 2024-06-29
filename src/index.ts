import {TpPlugin} from '@tweakpane/core';
import {StepperInputPlugin} from './stepper/plugin.js';

export const id = 'inputs';
export const css = '__css__';
export const plugins: TpPlugin[] = [
    StepperInputPlugin,
];

export * from './stepper/controller/stepper-buttons.js';
export * from './stepper/controller/stepper-text.js';
export * from './stepper/model/stepper.js';
export * from './stepper/view/stepper-buttons.js';
export * from './stepper/view/stepper-text.js';