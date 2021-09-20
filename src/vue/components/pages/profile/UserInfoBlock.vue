<template>
	<div class="white-block">
		<div class="d-flex justify-space-between">
			<p class="text-h6 mb-1">User name</p>
			<p class="text-caption grey--text lighten-3">Online</p>
		</div>
		<v-menu
			v-model="isOpenStatusDropdown"
			:close-on-content-click="false"
			offset-y
			nudge-bottom="10"
			bottom
			transition="scroll-y-transition"
		>
			<template v-slot:activator="{on: on, attrs: attrs}">
				<v-hover v-slot="{hover}">
					<p
						v-bind="attrs"
						v-on="on"
						style="cursor: pointer"
						class="text-caption grey--text lighten-3 pa-1"
						:class="{grey: hover}"
					>
						Set status
					</p>
				</v-hover>
			</template>
			<template #default>
				<div class="grey lighten-3 pa-4">
					<v-text-field value="user status" label="Set status"></v-text-field>
					<v-btn @click="isOpenStatusDropdown = false" color="primary" dark>btn</v-btn>
				</div>
			</template>
		</v-menu>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {inputValidationRules} from "../../form/FormValidation";

	export default Vue.extend({
		name: "UserInfo",
		data() {
			return {
				isOpenStatusDropdown: false,
				inputValidationRules
			};
		}
	});
</script>

<style lang="scss" scoped></style>
