<template>
	<div
		class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani"
	>
		<CountdownDigits :digits="minutes" />
		<span>:</span>
		<CountdownDigits :digits="seconds" />
	</div>
</template>
<script lagn="ts">
import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { Mutations } from "~/store/Countdown/types";
import CountdownDigits from "~/components/atoms/CountdownDigits.vue";
export default Vue.extend({
	components: {
		CountdownDigits,
	},
	computed: {
		...mapState("Countdown", ["time", "isActive"]),
		...mapGetters("Countdown", ["minutes", "seconds"]),
	},
	methods: {
		...mapMutations({
			setCountdownState: Mutations.SET_COUNTDOWN_STATE,
		}),
	},
});
</script>
<style lang=""></style>
