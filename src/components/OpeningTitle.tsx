import { type FC, useEffect, useRef, useState } from "react";

import { Box } from "@radix-ui/themes";

import { TextAnimationRAF } from "@utils/OpeningPage";

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
			<Box
				ref={textRef}
				style={{ fontSize: "65.5px", fontWeight: "500", color: "#fff" }}
			/>
		</Box>
	);
};

export default OpeningTitle;
