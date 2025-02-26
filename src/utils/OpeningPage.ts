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
			const cursor = document.createElement("span");
			cursor.setAttribute("class", "cursor");
			elem.appendChild(cursor);
			cancelAnimationFrame(rafId);
			return;
		}
		if (rafId !== -1) {
			const char = textArr[idx] === "\n" ? "<br/>" : textArr[idx];
			elem.innerHTML += char;
			idx++;
		}
		rafId = requestAnimationFrame(textAnimation);
	};
	textAnimation();

	return rafId;
};
