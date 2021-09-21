<template>
	<div>
		<div class="white-block" v-for="idx in 3" :key="idx">
			<v-list-item class="pl-0">
				<v-list-item-avatar>
					<v-img src="@/assets/no-user-photo.png"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>User name</v-list-item-title>
					<v-list-item-subtitle>11.11.2011 11:34</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<p class="mb-0">Simple post text ....</p>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "PostBlock"
	});
</script>

<style lang="scss" scoped></style>
