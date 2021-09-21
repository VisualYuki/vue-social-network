<template>
	<div class="white-block">
		<div class="d-flex justify-space-between align-center">
			<p class="text-h6 mb-0">User name</p>
			<p class="text-caption grey--text lighten-3 mb-0">Online</p>
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
					<v-btn @click="isOpenStatusDropdown = false" color="primary" dark>ok</v-btn>
				</div>
			</template>
		</v-menu>
		<v-divider></v-divider>
		<v-simple-table dense>
			<tbody>
				<tr>
					<th>Birthday:</th>
					<th>02.01.1998</th>
				</tr>
				<tr>
					<th>City:</th>
					<th>Киров</th>
				</tr>
				<tr>
					<th>Languages:</th>
					<th>Russian, English</th>
				</tr>
			</tbody>
		</v-simple-table>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "UserInfo",
		data() {
			return {
				isOpenStatusDropdown: false
			};
		}
	});
</script>

<style lang="scss" scoped></style>
