// TODO изучить синтаксис.
export type VuetifyValidateType = Vue & {validate: () => boolean};

// TODO почему нельзя сделать export inputValidationRules
export let inputValidationRules: any = {
	required: (value: any) => !!value || "Required field.",
	minWidth: (value: any) => value?.length >= 3 || "At least 3 characters."
};
