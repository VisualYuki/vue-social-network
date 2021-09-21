<template>
	<v-text-field
		hint="Enter your login password"
		:label="$t('password')"
		filled
		:type="isVisablePassword ? 'text' : 'password'"
		:append-icon="isVisablePassword ? 'visibility' : 'visibility_off'"
		@click:append="isVisablePassword = !isVisablePassword"
		:rules="[inputValidationRules.required, inputValidationRules.minWidth]"
		required
		validate-on-blur
		@input="$emit('getNewPassword', passwordValue)"
		v-model.trim="passwordValue"
		:error="isInvalidPassword"
		:error-messages="isInvalidPassword ? errorMessage : []"
	></v-text-field>
</template>

<script lang="ts">
	import Vue from "vue";
	import {inputValidationRules} from "../form/FormValidation";

	export default Vue.extend({
		name: "PasswordInput",
		props: {
			isInvalidPassword: {
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
				passwordValue: "",
				isVisablePassword: true
			};
		},
		methods: {}
	});
</script>

<style lang="scss" scoped></style>
