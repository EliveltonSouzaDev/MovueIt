<template lang="">
	<div class="flex items-center">
		<img src="alt" alt="" />
		<div>
			<strong>{{ $t("profile.name") }}</strong>
			<p>{{ $t("profile.description") }}</p>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
	computed: mapState("Challenges", ["level"]),
});
</script>
<style lang=""></style>
