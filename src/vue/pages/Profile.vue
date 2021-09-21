<template>
	<v-row no-gutters class="flex-sm-row flex-column ">
		<v-col class="mr-4" col="auto" sm="4" lg="3">
			<ImgBlock />
			<FriendsBlock />
		</v-col>
		<v-col>
			<UserInfoBlock />
			<NewPostBlock />
			<PostsBlock />
		</v-col>
	</v-row>
</template>

<script lang="ts">
	import PostsBlock from "@comp/pages/profile/PostsBlock.vue";
	import FriendsBlock from "@comp/pages/profile/FriendsBlock.vue";
	import ImgBlock from "@comp/pages/profile/ImgBlock.vue";
	import Vue from "vue";
	import UserInfoBlock from "@comp/pages/profile/UserInfoBlock.vue";
	import NewPostBlock from "@comp/pages/profile/NewPostBlock.vue";

	export default Vue.extend({
		components: {
			FriendsBlock,
			ImgBlock,
			UserInfoBlock,
			PostsBlock,
			NewPostBlock
		},
		name: "Profile"
	});
</script>

<style lang="scss" scoped></style>
