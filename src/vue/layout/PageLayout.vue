<template>
	<v-app>
		<Header />
		<v-main class="grey lighten-3" :class="{'mt-5': isUserAuth}">
			<v-container class="container-mw">
				<v-row no-gutters>
					<Aside v-if="isUserAuth" />
					<v-col>
						<slot></slot>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<Footer v-if="isUserAuth" />
	</v-app>
</template>

<script lang="ts">
	import Footer from "./components/MobileBottomNavigation.vue";
	import Vue from "vue";
	import Header from "./components/Header.vue";
	import Aside from "./components/DesktopAside.vue";
	import {mapState} from "vuex";

	export default Vue.extend({
		name: "PageLayout",
		components: {
			Header,
			Aside,
			Footer
		},
		computed: {
			...mapState("appLocalStorage", ["isUserAuth"])
		}
	});
</script>

<style lang="scss" scoped></style>
