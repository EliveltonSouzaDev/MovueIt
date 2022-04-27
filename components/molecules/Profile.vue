<template>
	<div class="flex items-center">
		<img
			src="https://avatars.githubusercontent.com/u/67668057?v=4"
			alt="Elivelton Souza"
			class="mr-6 h-20 rounded-full"
		/>
		<div>
			<strong class="text-title text-2xl">Elivelton Souza</strong>
			<p class="flex items-center">
				<img src="icons/level.svg" alt="level" class="mr-2" />
				<span class="text-base">{{ level }}</span>
			</p>
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
