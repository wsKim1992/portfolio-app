import { type Dispatch, type SetStateAction } from "react";

import { type TSubNav } from "@typings/Common";

export const omit = <T extends object>({
	obj,
	keys,
}: {
	obj: T;
	keys: (keyof T)[];
}) => {
	return Object.fromEntries(
		Object.entries(obj).filter(([key]) => !keys.includes(key as keyof T))
	);
};

export const isSubNavKey = (str: string): str is keyof TSubNav => {
	return ["intro", "experiences", "techStacks", "projects"].includes(str);
};

export const slideByIndex = ({
	parentElem,
	index,
}: {
	parentElem: HTMLElement;
	index: number;
}) => {
	const childElem = parentElem.children;
	if (childElem && index >= 0 && index < childElem.length) {
		const ithChild = childElem[index];
		const { offsetLeft: parentOffsetLeft } = parentElem;
		const { offsetLeft: childOffsetLeft } = ithChild as HTMLElement;
		parentElem.scrollTo({
			left: childOffsetLeft - parentOffsetLeft,
			behavior: "smooth",
		});
	}
};

export const debounceFn = <T extends object>({
	delay = 100,
	cb,
}: {
	delay?: number;
	cb: (obj: T) => void;
}) => {
	let timer: number | null = null;
	return () => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(cb, delay);
	};
};

export const throttleFn = <T extends object | string | number | UIEvent>({
	cb,
	delay,
}: {
	cb: (data: T) => void;
	delay: number;
}) => {
	let timeoutHandler: ReturnType<typeof setTimeout> | null = null;
	let lastArgs: Parameters<(data: T) => void> | null = null;
	let lastTime: number = 0;
	const cancel = () => {
		if (timeoutHandler) {
			clearTimeout(timeoutHandler);
		}
		lastTime = 0;
		lastArgs = null;
	};
	const throttle = (...args: Parameters<(data: T) => void>) => {
		const now = Date.now();
		const timeLeft = delay - (now - lastTime);
		lastArgs = args;
		if (timeLeft <= 0) {
			if (timeoutHandler) {
				clearTimeout(timeoutHandler);
				lastArgs = null;
			}
			lastTime = now;
			cb(...args);
		} else if (!timeoutHandler) {
			lastTime = now;
			timeoutHandler = setTimeout(() => {
				timeoutHandler = null;
				if (lastArgs) {
					cb(...lastArgs);
				}
			}, timeLeft);
		}
	};
	return { throttle, cancel };
};

export const setIndexCB = ({
	_evt: _,
	direction,
	setIndex,
	maxLength,
}: {
	_evt: MouseEvent;
	direction: "left" | "right";
	setIndex: Dispatch<SetStateAction<number>>;
	maxLength: number;
}) => {
	setIndex(prev => {
		const nextPrev = direction === "left" ? prev - 1 : prev + 1;
		if (nextPrev < 0 || nextPrev > maxLength) {
			return prev;
		}
		return nextPrev;
	});
};
