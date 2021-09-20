import Vue from "vue";
import {VuetifyValidateType} from "../components/form/FormValidation";

export default Vue.extend({
	methods: {
		validateForm(): void {
			(this.$refs.form as VuetifyValidateType).validate();
		}
	}
});
