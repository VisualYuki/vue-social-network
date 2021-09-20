<template>
	<v-text-field
		hint="Enter your login"
		:label="$t('login')"
		filled
		append-icon="face"
		:rules="[inputValidationRules.required, inputValidationRules.minWidth]"
		required
		validate-on-blur
		v-model.trim="loginValue"
		@input="$emit('getNewLogin', loginValue)"
		:error="isInvalidLogin"
		:error-messages="isInvalidLogin ? errorMessage : []"
	></v-text-field>
</template>

<script>
	import Vue from "vue";
	import {inputValidationRules} from "../form/FormValidation";

	export default Vue.extend({
		name: "LoginInput",
		props: {
			isInvalidLogin: {
				required: true,
				type: Boolean
			},
			errorMessage: {
				required: true,
				type: String
			}
		},
		data() {
			return {
				inputValidationRules,
				loginValue: "login"
			};
		}
	});
</script>
