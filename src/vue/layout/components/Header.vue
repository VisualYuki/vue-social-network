<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ru": {
    "hello": "こんにちは、世界！"
  }
}
</i18n>

<template>
	<v-app-bar color="primary" app dark>
		<v-container class="container-mw">
			<v-row no-gutters justify="space-between">
				<v-row col="auto" align-content="center" no-gutters>
					<v-icon large>groups</v-icon>
					<v-app-bar-title class="ml-4 d-flex align-center app-bar-title">
						<span class="text-subtitle-1 text-sm-h6 font-weight-medium">{{ $t("appName") }}</span>
					</v-app-bar-title>
				</v-row>
				<v-spacer></v-spacer>
				<v-row col="auto" justify="end" align-content="center" no-gutters>
					<v-menu offset-y bottom open-on-hover left transition="scroll-y-transition">
						<template v-slot:activator="{on: on, attrs: attrs}">
							<v-btn v-bind="attrs" v-on="on" icon large>
								<v-icon>
									translate
								</v-icon>
							</v-btn>
						</template>
						<template v-slot:default>
							<v-list dense>
								<v-list-item link @click="translateRussian">
									<v-list-item-title>Русский</v-list-item-title>
								</v-list-item>
								<v-list-item link @click="translateEnglish">
									<v-list-item-title>English</v-list-item-title>
								</v-list-item>
							</v-list>
						</template>
					</v-menu>

					<v-hover v-if="isUserAuth" v-slot="{hover}">
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
			},
			translateRussian() {
				this.$i18n.locale = "ru";
			},
			translateEnglish() {
				this.$i18n.locale = "en";
			}
		},
		computed: {
			...mapState("appLocalStorage", ["isUserAuth"])
		}
	});
</script>

<style lang="scss"></style>
