import {
	type Dispatch,
	type MouseEvent,
	type SetStateAction,
	type UIEvent,
} from "react";

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
			timeoutHandler = setTimeout(() => {
				timeoutHandler = null;
				if (lastArgs) {
					cb(...lastArgs);
				}
				lastTime = now;
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
	parentElem,
}: {
	_evt: MouseEvent;
	direction: "left" | "right";
	setIndex: Dispatch<SetStateAction<number>>;
	maxLength: number;
	parentElem: HTMLElement | null;
}): void => {
	setIndex(prev => {
		const nextPrev = direction === "left" ? prev - 1 : prev + 1;
		if (nextPrev < 0 || nextPrev > maxLength) {
			return prev;
		}
		parentElem && slideByIndex({ parentElem, index: nextPrev });
		return nextPrev;
	});
};

export const getAccumWidth = ({
	elems,
}: {
	elems: Array<HTMLElement | null>;
}) => {
	let accumWidth = 0;
	return elems.map(elem => {
		const width = elem ? elem.getBoundingClientRect().width : 0;
		accumWidth += width;
		return { accumWidth, width };
	});
};

export const getParentLeft = ({ elem }: { elem: HTMLElement }) => {
	return elem.getBoundingClientRect().left;
};

const isValid = ({
	scrollLeft,
	width,
}: {
	scrollLeft: number;
	width: { accumWidth: number; width: number };
}) => {
	return scrollLeft <= width.accumWidth - width.width / 2;
};

export const getIndex = ({
	scrollLeft,
	widths,
}: {
	scrollLeft: number;
	widths: { accumWidth: number; width: number }[];
}) => {
	let left = 0;
	let right = widths.length - 1;
	let ans = right;
	while (left <= right) {
		const mid: number = (left + right) / 2;
		if (isValid({ scrollLeft, width: widths[mid] })) {
			right = mid - 1;
			ans = Math.min(ans, mid);
		} else {
			left = mid + 1;
		}
	}
	return ans;
};

export const autoScroll = ({
	elem,
	index,
}: {
	elem: HTMLElement;
	index: number;
}): void => {
	const {
		children: { [index]: targetElem },
	} = elem;
	const offsetDiff = (targetElem as HTMLElement).offsetLeft - elem.offsetLeft;
	elem.scrollTo({ left: offsetDiff, behavior: "smooth" });
};

const clearMouseHandler = ({
	elem,
	state,
	widths,
	setIndex,
}: {
	elem: HTMLElement;
	state: {
		isTabbed: boolean;
		startXAxis: number;
		startScrollLeft: number;
	};
	widths: { accumWidth: number; width: number }[];
	setIndex: Dispatch<SetStateAction<number>>;
}) => {
	const idx = getIndex({ scrollLeft: elem.scrollLeft, widths });
	autoScroll({ elem, index: idx });
	setIndex(idx);
	state.isTabbed = false;
	state.startXAxis = 0;
	state.startScrollLeft = 0;
};

export const dragEventHandler = ({
	elem,
	widths,
	setIndex,
}: {
	elem: HTMLElement;
	widths: { accumWidth: number; width: number }[];
	setIndex: Dispatch<SetStateAction<number>>;
}): {
	onMouseDown: (evt: MouseEvent) => void;
	onMouseMove: (evt: MouseEvent) => void;
	onMouseUp: (evt: MouseEvent) => void;
	onMouseLeave: (evt: MouseEvent) => void;
	slideByIdx: (index: number) => void;
	handleScrollSlide: (_evt: UIEvent<HTMLElement>) => void;
} => {
	const state: {
		isTabbed: boolean;
		startXAxis: number;
		startScrollLeft: number;
	} = {
		isTabbed: false,
		startXAxis: 0,
		startScrollLeft: 0,
	};
	const { throttle, cancel } = throttleFn({
		cb: (evt: MouseEvent) => {
			if (state.isTabbed) {
				const { clientX } = evt;
				const { startXAxis, startScrollLeft } = state;
				const diff = -(clientX - startXAxis);
				elem.scrollTo({
					left: startScrollLeft + diff,
					behavior: "smooth",
				});
			}
		},
		delay: 32,
	});
	let timer: null | ReturnType<typeof setTimeout> = null;
	return {
		slideByIdx: index => {
			state.isTabbed = true;
			autoScroll({ elem, index });
			setTimeout(() => {
				state.isTabbed = false;
			}, 100);
		},
		onMouseDown: (evt: MouseEvent) => {
			state.startXAxis = evt.clientX;
			state.startScrollLeft = elem.scrollLeft;
			state.isTabbed = true;
		},
		onMouseMove: throttle,
		onMouseUp: (_evt: MouseEvent) => {
			clearMouseHandler({
				elem,
				widths,
				state,
				setIndex,
			});
			cancel();
		},
		onMouseLeave: (_evt: MouseEvent) => {
			clearMouseHandler({
				elem,
				widths,
				state,
				setIndex,
			});
			cancel();
		},
		handleScrollSlide: (_evt: UIEvent<HTMLElement>) => {
			if (!state.isTabbed) {
				if (timer !== null) clearTimeout(timer);
				timer = setTimeout(() => {
					const { scrollLeft } = elem;
					const index = getIndex({ scrollLeft, widths });
					setIndex(index);
				}, 250);
			}
		},
	};
};

export const getMaximumToShow = ({
	elem,
	total,
}: {
	elem: HTMLElement;
	total: number;
}): number => {
	const { maxWidth, gap } = getComputedStyle(elem);
	const pxRegEx = new RegExp(/^\d+px$/);
	const maxWidthVal =
		maxWidth && pxRegEx.test(maxWidth)
			? Number(maxWidth.split("px")[0]) / total
			: 0;
	const gapVal = gap && pxRegEx.test(gap) ? Number(gap.split("px")[0]) : 0;
	if (maxWidthVal) {
		const li = elem.querySelector("li");
		if (li) {
			const liWidth = li.getBoundingClientRect().width;
			return (liWidth + gapVal) * 5;
		}
	}
	return 0;
};

const convertPXIntoNum = (px: string): number => {
	const pxRegEx = new RegExp(/^\d+(\.\d+)?px$/);
	return pxRegEx.test(px) ? Number(px.split("px")[0]) : 0;
};

export const computeSlideData = ({
	elem,
}: {
	elem: HTMLElement;
}): {
	liWidth: number;
	middle: number;
} => {
	const { maxWidth, padding } = getComputedStyle(elem);
	if (maxWidth) {
		const maxWidthNum = convertPXIntoNum(maxWidth);
		const paddingNum = convertPXIntoNum(padding);
		const li = elem.querySelector("li");
		if (li) {
			const { width, marginLeft } = getComputedStyle(li);
			return {
				liWidth: convertPXIntoNum(width) + convertPXIntoNum(marginLeft),
				middle: (maxWidthNum - paddingNum * 2) / 2,
			};
		}
		return {
			liWidth: 0,
			middle: maxWidthNum / 2,
		};
	}
	return {
		liWidth: 0,
		middle: 0,
	};
};

export const dotBoxSlide = ({
	elem,
	slideData,
	index,
}: {
	elem: HTMLElement;
	slideData: {
		liWidth: number;
		middle: number;
	};
	index: number;
}) => {
	const { liWidth, middle } = slideData;
	const offset = liWidth * index;
	console.log({ offset });
	console.log({ middle });
	if (offset >= middle) {
		console.log({ offset });
		elem.scrollTo({ left: offset + middle });
	} else {
		elem.scrollTo({ left: offset - middle });
	}
};

export const handleClickLi = ({
	elem,
	slideData,
	index,
	slideByIdx,
}: {
	elem: HTMLElement;
	slideData: {
		liWidth: number;
		middle: number;
	};
	index: number;
	slideByIdx: (index: number) => void;
}) => {
	dotBoxSlide({
		elem,
		slideData,
		index,
	});
	setTimeout(() => {
		slideByIdx && slideByIdx(index);
	}, 1000);
};
