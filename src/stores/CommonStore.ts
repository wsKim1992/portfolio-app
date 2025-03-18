import { create } from "zustand";

type TState = {
	introElemObserver?: IntersectionObserver | null;
};

type TAction = {
	setIntroElemObserver: (
		observer: null | IntersectionObserver | (() => IntersectionObserver)
	) => void;
	initIntroElemObserver: () => void;
};

export const useCommonStore = create<TState & TAction>()(set => ({
	introElemObserver: undefined,
	setIntroElemObserver(observer) {
		set(state => ({
			...state,
			introElemObserver:
				typeof observer === "function" ? observer() : observer,
		}));
	},
	initIntroElemObserver: () => {
		set(state => {
			if (state.introElemObserver) {
				state.introElemObserver?.disconnect();
			}
			return {
				...state,
				introElemObserver: null,
			};
		});
	},
}));
