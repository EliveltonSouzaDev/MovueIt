<template>
	<div
		class="flex justify-between items-center pb-5 border-b-2 border-x-gray-line mt-8 lg:mt-14 font-medium"
	>
		<p>Completed challenges</p>
		<p>{{ completedChallenges }}</p>
	</div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
	computed: mapState("Challenges", ["completedChallenges"]),
});
</script>
