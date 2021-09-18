import Vue from "vue";
import {VuetifyValidateType} from "../components/Form/FormValidation";

export default Vue.extend({
	methods: {
		validateForm(): void {
			(this.$refs.form as VuetifyValidateType).validate();
		}
	}
});
