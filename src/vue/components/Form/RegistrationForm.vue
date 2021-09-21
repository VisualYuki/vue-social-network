<template>
	<v-form @submit.prevent="submitForm()" class="py-10" ref="form" v-model="validation.isValidForm" lazy-validation>
		<LoginInput
			@getNewLogin="getNewLogin"
			:isInvalidLogin="validation.isInvalidLogin"
			errorMessage="This login exists already. Please create new login."
		/>
		<PasswordInput
			@getNewPassword="getNewPassword_1($event), comparePasswords()"
			:isInvalidPassword="validation.isInvalidPassword"
			errorMessage="Passwords are not equal"
		></PasswordInput>
		<PasswordInput
			@getNewPassword="getNewPassword_2"
			:isInvalidPassword="validation.isInvalidPassword"
			errorMessage="Passwords are not equal"
		></PasswordInput>

		<v-btn :disabled="!validation.isValidForm" type="submit" class="mt-4" color="primary" @click="validateForm" block>
			Create account
		</v-btn>

		<v-dialog v-model="isOpenedDialog" persistent max-width="400" overlay-opacity="0.8">
			<v-card>
				<v-card-title class="text-h5 grey lighten-2 justify-center">
					Successfull registration.
				</v-card-title>
				<v-card-actions class="justify-center py-5">
					<v-btn color="primary" :to="{name: 'auth'}" text>
						Go to auth page
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-form>
</template>

<script lang="ts">
	import Vue from "vue";
	import LoginInput from "../vuetifyComponents/LoginInput.vue";
	import PasswordInput from "../vuetifyComponents/PasswordInput.vue";
	import {VuetifyValidateType, inputValidationRules} from "./FormValidation";
	import {logInStorage} from "../../utils/logInStorage";
	import validateForm from "../../mixins/validateForm";

	// TODO как использовать импорты без добавления в data() {}
	export default Vue.extend({
		name: "AuthForm",
		components: {LoginInput, PasswordInput},
		mixins: [validateForm],
		data() {
			return {
				formData: {
					password_1: "",
					password_2: "",
					login: ""
				},
				validation: {
					isInvalidLogin: false,
					isInvalidPassword: false,
					isValidForm: false
				},
				isOpenedDialog: false,
				inputValidationRules,
				logInStorage
			};
		},
		methods: {
			getNewLogin(login: string): void {
				this.formData.login = login;
				this.validation.isInvalidLogin = false;
			},
			getNewPassword_1(newPasswordValue: string) {
				this.formData.password_1 = newPasswordValue;
			},
			getNewPassword_2(newPasswordValue: string) {
				this.formData.password_2 = newPasswordValue;
			},
			//validateForm(): void {
			//	(this.$refs.form as VuetifyValidateType).validate();
			//},
			submitForm(): void {
				const isThereEnteredLogin: boolean = this.logInStorage.isThereEnteredLogin(this.formData.login);

				if (!isThereEnteredLogin) {
					this.logInStorage.setLogInData(this.formData.login, this.formData.password_1);
					this.isOpenedDialog = true;
				} else {
					this.validation.isInvalidLogin = true;
				}
			},
			comparePasswords(): void {
				let password_1: string = this.formData.password_1;
				let password_2: string = this.formData.password_2;

				function isEqualPasswords(): boolean {
					if (password_1 === password_2) {
						return true;
					} else {
						return false;
					}
				}

				function isThereEmptyPassword(): boolean {
					if (password_1.length > 0 && password_2.length > 0) {
						return false;
					} else {
						return true;
					}
				}

				if (!isThereEmptyPassword()) {
					if (isEqualPasswords()) {
						this.validation.isInvalidPassword = false;
					} else {
						this.validation.isInvalidPassword = true;
					}
				}
			}
		}
	});
</script>

<style lang="scss" scoped></style>
