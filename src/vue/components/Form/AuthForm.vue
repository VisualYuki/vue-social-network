<template>
	<v-form @submit.prevent="submitForm" class="py-10" ref="form" v-model="validation.isValidForm" lazy-validation>
		<LoginInput
			@getNewLogin="getNewLogin"
			:isInvalidLogin="validation.isInvalidLogin"
			errorMessage="This login dont exist. Please enter a new login."
		></LoginInput>
		<PasswordInput
			@getNewPassword="getNewPassword"
			:isInvalidPassword="validation.isInvalidPassword"
			errorMessage="This password is invalid with entered login"
		></PasswordInput>

		<v-btn :disabled="!validation.isValidForm" type="submit" class="mt-4" color="primary" @click="validateForm" block>
			{{ $t("logInBtn") }}
		</v-btn>

		<div class="mt-4">
			<p class="text-center">{{ $t("notYetAccount") }}</p>
			<v-btn :to="{name: 'registration'}" class="mt-4" block>
				{{ $t("registration") }}
			</v-btn>
		</div>
	</v-form>
</template>

<script lang="ts">
	import Vue from "vue";
	import LoginInput from "../vuetifyComponents/LoginInput.vue";
	import PasswordInput from "../vuetifyComponents/PasswordInput.vue";
	import validateForm from "../../mixins/validateForm";

	import {logInStorage} from "../../utils/logInStorage";

	// TODO как описать тип для data()
	export default Vue.extend({
		name: "AuthForm",
		mixins: [validateForm],
		components: {
			LoginInput,
			PasswordInput
		},
		data() {
			return {
				formData: {
					passwordValue: "",
					loginValue: ""
				},
				validation: {
					isInvalidLogin: false,
					isInvalidPassword: false,
					isValidForm: undefined
				},
				logInStorage
			};
		},

		methods: {
			submitForm(): void {
				const isThereEnteredLogin: boolean = this.logInStorage.isThereEnteredLogin(this.formData.loginValue);

				if (isThereEnteredLogin) {
					let storagePassword = this.logInStorage.getLogInData(this.formData.loginValue);

					if (storagePassword === this.formData.passwordValue) {
						this.$store.dispatch("appLocalStorage/setUserAuth");
						this.$router.push({name: "profile"});
					} else {
						this.validation.isInvalidPassword = true;
					}
				} else {
					this.validation.isInvalidLogin = true;
				}
			},
			getNewLogin(loginValue: string): void {
				this.formData.loginValue = loginValue;
				this.validation.isInvalidLogin = false;
			},
			getNewPassword(passwordValue: string): void {
				this.formData.passwordValue = passwordValue;
				this.validation.isInvalidPassword = false;
			}
		}
	});
</script>

<style lang="scss" scoped></style>
