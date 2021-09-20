<template>
	<v-row no-gutters>
		<v-col class="mr-4" cols="4" lg="3">
			<ImgBlock />
			<FriendsBlock />
		</v-col>
		<v-col>
			<UserInfoBlock />
			<PostsBlock />
		</v-col>
	</v-row>
</template>

<script lang="ts">
	import PostsBlock from "../components/pages/profile/PostsBlock.vue";
	import FriendsBlock from "../components/pages/profile/FriendsBlock.vue";
	import ImgBlock from "../components/pages/profile/ImgBlock.vue";
	import Vue from "vue";
	import UserInfoBlock from "../components/pages/profile/UserInfoBlock.vue";

	export default Vue.extend({
		components: {
			FriendsBlock,
			ImgBlock,
			UserInfoBlock,
			PostsBlock
		},
		name: "Profile"
	});
</script>

<style lang="scss" scoped></style>
