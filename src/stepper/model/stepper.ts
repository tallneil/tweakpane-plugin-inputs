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

	public static equals(v1: Stepper, v2: Stepper): boolean {
		return v1.val === v2.val;
	}

	public toObject(): StepperObject {
		return {
			val: this.val,
		};
	}
}

export const StepperAssembly: PointNdAssembly<number> = {
	fromComponents: (comps) => comps[0],
	toComponents: (p) => [p],
};
