<template>
	<div>
		<v-hover v-slot="{hover}" v-for="num in 6" :key="num">
			<v-list-item :class="{grey: hover, 'lighten-4': hover}" style="cursor:pointer" class="white-block">
				<v-list-item-avatar size="50">
					<v-img src="@/assets/no-user-photo.png"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title class="font-weight-medium">User name</v-list-item-title>
					<v-list-item-subtitle class="d-flex align-center">
						<v-list-item-avatar size="25" class="pl-0 ml-0">
							<v-img src="@/assets/no-user-photo.png"></v-img>
						</v-list-item-avatar>
						<span>simple message text ....</span>
					</v-list-item-subtitle>

					<v-icon
						:class="{'d-block': hover}"
						class="d-none message-item-icon"
						size="20"
						right
						style="position: absolute; top: 10px; right: 10px; "
					>
						close
					</v-icon>
				</v-list-item-content>
			</v-list-item>
		</v-hover>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "Messenger"
	});
</script>

<style lang="scss" scoped>
	.message-item-icon {
		&:hover {
			color: red;
		}
	}
</style>
