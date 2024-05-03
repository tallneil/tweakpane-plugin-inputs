import {PointNdAssembly} from '@tweakpane/core';

export interface StepperObject {
	val: number;
}

export class Stepper {
	public val: number;

	constructor(val: number) {
		this.val = val;
	}

	public static isObject(obj: unknown): obj is StepperObject {
		if (typeof obj !== 'object' || obj === null) {
			return false;
		}
		const val = (obj as Record<string, any>).val;
		if (typeof val !== 'number') {
			return false;
		}
		return true;
	}

	get getValue(): number {
		return this.val;
	}

	public toObject(): StepperObject {
		return {
			val: this.val,
		};
	}
}

export const StepperAssembly: PointNdAssembly<Stepper> = {
	fromComponents: (comps) => new Stepper(comps[0]),
	toComponents: (p) => [p.val],
};
