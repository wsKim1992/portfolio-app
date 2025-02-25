export const TextAnimationRAF = ({
	elem,
	textArr,
}: {
	elem: HTMLDivElement;
	textArr: string[];
}) => {
	let idx = 0;
	let rafId = -1;
	const textAnimation = () => {
		if (idx >= textArr.length) {
			cancelAnimationFrame(rafId);
			return;
		}
		if (rafId !== -1) {
			const char = textArr[idx] === "\n" ? "<br/>" : textArr[idx];
			elem.innerHTML += char;
			idx++;
		}
		rafId = requestAnimationFrame(textAnimation);
		console.log({ rafId });
	};
	textAnimation();

	return rafId;
};
