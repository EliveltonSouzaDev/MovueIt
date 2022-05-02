<template>
	<p class="w-1/2 flex gap-x-1">
		<span
			v-for="(digit, index) in splittedDigits"
			:key="index"
			class="flex items-center justify-center w-1/2 bg-white rounded-md py-3"
		>
			<span class="text-6xl text-title font-rajdhani">{{ digit }}</span>
		</span>
	</p>
</template>
<script lang="ts">
import Vue from "vue";
import { splitValue } from "~/utils";
export default Vue.extend({
	props: {
		digits: {
			type: Number,
			required: true,
		},
	},
	computed: {
		splittedDigits(): string[] {
			return splitValue(this.digits);
		},
	},
});
</script>
<style lang=""></style>
