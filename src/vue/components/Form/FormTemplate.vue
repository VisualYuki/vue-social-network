<template>
	<v-row justify="center" no-gutters>
		<v-col cols="12" sm="7" md="6" lg="4">
			<v-card elevation="5">
				<v-toolbar class="flex-column" height="auto" color="primary" flat dark>
					<v-row class="flex-wrap my-5" no-gutters>
						<v-col cols="12" class="d-flex justify-center mb-3">
							<v-icon size="100">{{ formIconName }}</v-icon>
						</v-col>
						<v-col cols="12">
							<v-toolbar-title class="text-center justify-center">
								{{ formTitle }}
							</v-toolbar-title>
						</v-col>
					</v-row>
				</v-toolbar>
				<v-card-text>
					<slot></slot>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
	import Vue from "vue";

	export default Vue.extend({
		name: "FormTemplate",
		props: {
			formIconName: {
				required: true,
				type: String
			},
			formTitle: {
				required: true,
				type: String
			}
		}
	});
</script>

<style lang="scss" scoped></style>
