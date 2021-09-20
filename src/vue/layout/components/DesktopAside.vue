<template>
	<v-col class="mr-5 d-none d-md-block" md="3" lg="2">
		<v-list color="transparent" dense subheader>
			<v-list-item-group>
				<v-list-item dense v-for="(menuItem, index) in menuItems" :to="menuItem.routerPath" :key="index">
					<v-list-item-avatar>
						<v-icon color="primary">
							{{ menuItem.icon }}
						</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title>
							{{ $t(menuItem.text) }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-col>
</template>

<script lang="ts">
	import Vue from "vue";
	import {mapState} from "vuex";

	export default Vue.extend({
		name: "DesktopAside",
		computed: {
			...mapState("menuItems", ["menuItems"])
		}
	});
</script>

<style lang="scss" scoped></style>
