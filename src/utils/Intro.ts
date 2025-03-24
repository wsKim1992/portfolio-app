const rotateAnimation = (spans: NodeListOf<Element>) => {
	let idx = 0;
	let rafIdx = -1;
	const animationCb = () => {
		if (idx <= spans.length && spans[idx]) {
			(spans[idx] as HTMLElement).style.setProperty(
				"transform",
				"rotateY(360deg)"
			);
			idx += 1;
			rafIdx = requestAnimationFrame(animationCb);
		} else {
			cancelAnimationFrame(rafIdx);
		}
	};
	if (rafIdx === -1) {
		animationCb();
	}
};

export const rotateInOrder = (elem: HTMLElement) => {
	const spans = elem.querySelectorAll(".highlighted-char");
	if (spans.length) {
		rotateAnimation(spans);
	}
};
