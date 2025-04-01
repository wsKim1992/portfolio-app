import { keyframes } from "@stitches/react";
import dayjs from "dayjs";

export const convertStrIntoDateFormat = (str: string): string => {
	return dayjs(str).format("YYYY-MM-DD").toString();
};

export const setSliderAnimation = ({
	outerElem,
	innerElem,
}: {
	outerElem: HTMLDivElement;
	innerElem: HTMLDivElement;
}): void => {
	const outerWidth = outerElem.getBoundingClientRect().width;
	const innerWidth = innerElem.getBoundingClientRect().width;
	if (outerWidth < innerWidth) {
		const diff = innerWidth - outerWidth;
		const animationName = keyframes({
			"0%": {
				transform: "translateX(0px)",
			},
			"100%": {
				transform: `translateX(-${diff}px)`,
			},
		});
		innerElem.style.setProperty(
			"animation",
			`${animationName.toString()} 3.5s ease-in-out 5s infinite alternate`
		);
	}
};
