<template>
	<div class="white-block d-flex align-center">
		<v-avatar size="30">
			<v-img src="@/assets/no-user-photo.png"></v-img>
		</v-avatar>
		<v-textarea class="mx-3 pt-0 mt-0" placeholder="Enter your post" auto-grow rows="1" hide-details=""></v-textarea>
		<v-btn color="primary" class="">Send post</v-btn>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "NewPostBlock"
	});
</script>

<style lang="scss" scoped></style>
