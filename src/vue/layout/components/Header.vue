<template>
	<v-app-bar color="primary" app dark>
		<v-container>
			<v-row no-gutters justify="space-between">
				<v-row col="auto" align-content="center" no-gutters>
					<v-icon large>groups</v-icon>
					<v-app-bar-title class="ml-4 d-flex align-center app-bar-title">
						<span class="text-subtitle-1 text-sm-h6 font-weight-medium">Social network</span>
					</v-app-bar-title>
				</v-row>
				<v-spacer></v-spacer>
				<v-row col="auto" v-if="isUserAuth" justify="end" align-content="center" no-gutters>
					<v-btn class="mr-0 mr-md-2" icon large>
						<v-icon>account_circle</v-icon>
					</v-btn>
					<v-hover v-slot="{hover}">
						<v-btn icon large :color="hover ? 'red' : ''" @click="logOut">
							<v-icon>logout</v-icon>
						</v-btn>
					</v-hover>
				</v-row>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script lang="ts">
	import Vue from "vue";
	import {mapState} from "vuex";

	export default Vue.extend({
		name: "Header",
		methods: {
			logOut() {
				this.$store.dispatch("appLocalStorage/removeUserAuth");
				this.$router.push({name: "auth"});
			}
		},
		computed: {
			...mapState("appLocalStorage", ["isUserAuth"])
		}
	});
</script>

<style lang="scss"></style>
