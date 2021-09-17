<template>
	<PageLayout>
		<router-view></router-view>
	</PageLayout>
</template>

<script lang="ts">
	import "./scss/common.scss";
	import "./scss/vuetify.scss";
	import Vue from "vue";

	import PageLayout from "@layout/PageLayout.vue";
	import Auth from "@pages/Auth.vue";
	import Registration from "@pages/Registration.vue";

	export default Vue.extend({
		components: {PageLayout, Auth, Registration},
		name: "App",

		mounted() {}
	});
</script>

<style lang="scss"></style>
