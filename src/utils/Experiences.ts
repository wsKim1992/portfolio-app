import { keyframes } from "@stitches/react";
import dayjs from "dayjs";

export const convertStrIntoDateFormat = (str: string): string => {
	return dayjs(str).format("YYYY-MM-DD").toString();
};

export const setSliderAnimation = ({
	diff,
	elem,
}: {
	diff: number;
	elem: HTMLDivElement;
}): void => {
	const animationName = keyframes({
		"0%": {
			transform: "translateX(0px)",
		},
		"100%": {
			transform: `translateX(-${diff}px)`,
		},
	});
	elem.style.setProperty(
		"animation",
		`${animationName.toString()} 3.5s ease-in-out 5s infinite alternate`
	);
};
