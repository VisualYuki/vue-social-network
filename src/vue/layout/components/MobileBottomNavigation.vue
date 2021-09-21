<template>
	<v-bottom-navigation class="d-flex d-md-none" color="primary" fixed grow light>
		<v-btn
			v-for="(menuItem, index) in menuItems"
			:to="menuItem.routerPath"
			:key="index"
			color="transparent"
			height="100%"
		>
			<span class="d-none d-sm-block">{{ $t(menuItem.text) }}</span>
			<v-icon color="primary">
				{{ menuItem.icon }}
			</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script lang="ts">
	import Vue from "vue";
	import {mapState} from "vuex";

	export default Vue.extend({
		name: "MobileBottomNavigation",
		computed: {
			...mapState("menuItems", ["menuItems"])
		}
	});
</script>

<style lang="scss"></style>
