<template>
	<FormTemplate formIconName="person_add" formTitle="Create new account">
		<Registration></Registration>
	</FormTemplate>
</template>

<script lang="ts">
	import Vue from "vue";
	import Registration from "@comp/form/RegistrationForm.vue";
	import FormTemplate from "@comp/form/FormTemplate.vue";

	export default Vue.extend({
		components: {FormTemplate, Registration},
		name: "Auth"
	});
</script>

<style lang="scss" scoped></style>
