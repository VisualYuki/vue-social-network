<template>
	<FormTemplate formIconName="login" formTitle="Log in">
		<AuthForm></AuthForm>
	</FormTemplate>
</template>

<script lang="ts">
	import Vue from "vue";
	import AuthForm from "@comp/Form/AuthForm.vue";
	import FormTemplate from "@comp/Form/FormTemplate.vue";

	export default Vue.extend({
		components: {FormTemplate, AuthForm},
		name: "Auth"
	});
</script>

<style lang="scss" scoped></style>
