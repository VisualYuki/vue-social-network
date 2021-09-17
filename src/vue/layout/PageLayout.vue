<template>
	<v-app>
		<Header />
		<v-main class="mt-12">
			<v-container>
				<slot></slot>
			</v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
	import Vue from "vue";
	import Header from "./components/Header.vue";

	export default Vue.extend({
		name: "PageLayout",
		components: {
			Header
		}
	});
</script>

<style lang="scss" scoped></style>
