import { isSubNavKey } from "@utils/Common";

export const observerFactory = ({
	cb,
	options,
}: {
	cb: IntersectionObserverCallback;
	options: IntersectionObserverInit;
}): IntersectionObserver => {
	return new IntersectionObserver(cb, options);
};

const roundUpNumByTwo = (num: number) => {
	return Math.round(num * 100) / 100;
};

export const scrollHandlerFactory = ({
	rootElem,
	introBoxLayout,
	introBoxLayoutTop,
}: {
	rootElem: HTMLElement;
	introBoxLayout: Element;
	introBoxLayoutTop: number;
}): ((evt: Event) => void) => {
	return (_evt: Event) => {
		const { scrollTop } = rootElem;
		const diff = scrollTop - introBoxLayoutTop;
		if (diff <= 0) {
			const introBoxs = introBoxLayout.querySelectorAll(".intro-box");
			introBoxs.forEach(introElem => {
				const { top: thisTop } = introElem.getBoundingClientRect();
				const scaleVal: number =
					roundUpNumByTwo(scrollTop / thisTop) >= 1
						? 1
						: scrollTop / thisTop;
				(introElem as HTMLElement).style.setProperty(
					"transform",
					`scale(${roundUpNumByTwo(scaleVal)},${scaleVal})`
				);
			});
		}
	};
};

export const introObserverFactory = ({
	rootElem,
}: {
	rootElem: HTMLElement;
}) => {
	let handleScrollCb: ((evt: Event) => void) | null = null;
	const cb: IntersectionObserverCallback = entries => {
		const introBoxLayout = entries.filter(entry =>
			entry.target.classList.contains("intro-box-layout")
		)[0];

		if (introBoxLayout.isIntersecting) {
			const { top: introBoxLayoutTop } = introBoxLayout.intersectionRect;
			if (handleScrollCb === null) {
				handleScrollCb = scrollHandlerFactory({
					rootElem,
					introBoxLayout: introBoxLayout.target,
					introBoxLayoutTop,
				});
				rootElem.addEventListener("scroll", handleScrollCb);
			}
		} else if (!introBoxLayout.isIntersecting) {
			if (handleScrollCb) {
				rootElem.removeEventListener("scroll", handleScrollCb);
				handleScrollCb = null;
			}
		}
	};
	const options: IntersectionObserverInit = {
		root: rootElem,
		rootMargin: "0px",
	};
	return observerFactory({ cb, options });
};

export const CopyToClipboard = async (url: string) => {
	await window.navigator.clipboard.writeText(url);
};

export const ScrollIntoComponent = ({
	hash,
	Elem,
	options = { behavior: "smooth", block: "center", inline: "center" },
}: {
	hash: string;
	Elem: HTMLElement;
	options?: ScrollIntoViewOptions;
}) => {
	const path = hash.split("#")[1];
	if (isSubNavKey(path)) {
		Elem.scrollIntoView(options);
	}
};
