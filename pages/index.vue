<template>
	<section
		class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20"
	>
		<div class="flex flex-col w-full lg:w-1/2">
			<Profile />
			<CompletedChallenges />
			<Countdown @completed="getNewChallange" />
			<button v-if="hasCountdownCompleted" disabled class="button completed">
				cycle completed
			</button>
			<button
				v-else-if="isCountdownActive"
				class="button abandon"
				@click="setCountdownState(false)"
			>
				abandon cycle
			</button>
			<button v-else class="button start" @click="setCountdownState(true)">
				start cycle
			</button>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { Mutations as CountdownMT } from "~/store/Countdown/types";
import CompletedChallenges from "~/components/atoms/CompletedChallenges.vue";
import Profile from "~/components/molecules/Profile.vue";
import Countdown from "~/components/molecules/Countdown.vue";

import { playAudio, sendNotification } from "~/utils";

interface Head {
	title: string;
}

export default Vue.extend({
	head(): Head {
		return {
			title: "Home | Movue.it",
		};
	},
	components: {
		CompletedChallenges,
		Profile,
		Countdown,
	},
	mounted() {
		if ("Notification" in window) {
			Notification.requestPermission();
		}
	},
	computed: {
		...mapState('Countdown', {
			hasCountdownCompleted: "hasCompleted",
			isCountdownActive: "isActive",
		}),
	},
	methods: {
		...mapMutations({
			setCountdownHasCompleted: `Countdown/${CountdownMT.SET_HAS_COMPLETED}`,
			setCountdownIsActive: `Countdown/${CountdownMT.SET_IS_ACTIVE}`,
		}),
		setCountdownState(flag: boolean) {
			this.setCountdownHasCompleted(false);
			this.setCountdownIsActive(flag);
		},
		getNewChallange() {
			this.setCountdownHasCompleted(true);

			if (Notification?.permission === "granted") {
				playAudio("/notification.mp3");
				sendNotification("New Challenge!", {
					body: "You have a new challenge",
					icon: "/favicon.png",
				});
			}
		},
	},
});
</script>
