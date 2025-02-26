import { type FC, useEffect, useRef, useState } from "react";

import { Box } from "@radix-ui/themes";
import { keyframes, styled } from "@stitches/react";

import { TextAnimationRAF } from "@utils/OpeningPage";

import Button from "@components/Button";

const CursorBlinking = keyframes({
	"0%": {
		opacity: 1,
	},
	"50%": {
		opacity: 0,
	},
	"100%": {
		opacity: 1,
	},
});
const IntroTextBox = styled(Box, {
	fontSize: "65.5px",
	fontWeight: "500",
	color: "#fff",
	".cursor": {
		margin: "2.5px 10px",
		display: "inline-block",
		height: "60px",
		width: "1.5px",
		background: "#fff",
		animation: `${CursorBlinking} 0.5s ease-in-out infinite`,
	},
});

type OpeningTitleProps = {
	text: string;
};

const OpeningTitle: FC<OpeningTitleProps> = ({ text }) => {
	const textRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (textRef.current) {
			let rafIdx = TextAnimationRAF({
				elem: textRef.current,
				textArr: text.replaceAll("\\n", "\n").split(""),
			});
			return () => {
				cancelAnimationFrame(rafIdx);
			};
		}
	}, []);

	return (
		<Box
			style={{
				position: "absolute",
				top: "10%",
				left: "10%",
				overflow: "hidden",
				whiteSpace: "nowrap",
			}}
		>
			<IntroTextBox ref={textRef} />
			<Button
				text="Enter"
				handleClick={() => {}}
				css={{
					width: "250px",
					background: "rgb(35,57,116)",
					marginTop: "50px",
				}}
			/>
		</Box>
	);
};

export default OpeningTitle;
