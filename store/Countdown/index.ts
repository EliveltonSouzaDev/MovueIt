import { State, Getters, Mutations, MutationsInterface } from "./types";

const MINUTES = 25;

export const state = (): State => ({
	time: MINUTES * 60,
	isActive: false,
	hasCompleted: false,
});

export const getters: Getters = {
	minutes: (state: State): number => Math.floor(state.time / 60),
	seconds: (state: State): number => state.time % 60,
};

export const mutations: MutationsInterface = {};
