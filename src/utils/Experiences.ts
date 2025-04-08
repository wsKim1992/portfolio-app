import { Dispatch, SetStateAction } from "react";
import { MouseEvent as ReactMouseEvent } from "react";

import { keyframes } from "@stitches/react";
import dayjs from "dayjs";

import { techStackName } from "@constants/experiences";

import { type TTechStackEnum } from "@typings/Experiences";

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

export const checkTechStackEnum = (value: string): value is TTechStackEnum => {
	return Boolean(Object.keys(techStackName).find(v => v === value));
};

export const handleTabValueChange = ({
	setState,
}: {
	setState: Dispatch<SetStateAction<TTechStackEnum>>;
}): ((newValue: string) => void) => {
	return (newValue: string) => {
		if (checkTechStackEnum(newValue)) {
			setState(newValue);
		}
	};
};

export const handleMouseEnter = ({
	elem,
}: {
	elem: HTMLElement | null;
}): ((evt: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void) => {
	return (evt: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!elem) return null;
		const { clientX, clientY, currentTarget } = evt;
		if (currentTarget.parentElement) {
			const { left: px, top: py } =
				currentTarget.parentElement.getBoundingClientRect();
			elem.style.setProperty("opacity", "1");
			elem.style.setProperty(
				"transform",
				`translate(${clientX - px - 10}px, ${clientY - py - 30}px)`
			);
		}
	};
};

export const handleMouseMove = ({
	elem,
}: {
	elem: HTMLElement | null;
}): ((evt: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void) => {
	return (evt: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
		const { movementX, movementY } = evt;
		if (elem) {
			elem.style.setProperty(
				"transform",
				`translate(${movementX}px, ${movementY}px)`
			);
		}
	};
};
