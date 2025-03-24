import { Box, Flex, Text } from "@radix-ui/themes";
import { styled } from "@stitches/react";

export const IntroInnerLayout = styled(Box, {
	margin: "0 auto",
	boxSizing: "border-box",
	width: "1280px",
	fontSize: "35.5px",
});

export const IntroBoxElem = styled(Box, {
	width: "64.5%",
	height: "fit-content",
	padding: "20px",
	boxSizing: "border-box",
	background: "rgb(58, 134, 255)",
	borderRadius: "1rem",
	cursor: "pointer",
	color: "#fff",
	transition: "background 0.55s ease-in",
	"&:hover": {
		background: "rgb(100, 255, 218)",
		color: "rgb(0,0,0)",
	},
});

export const Highlighted = styled(Text, {
	fontSize: "inherit",
	fontWeight: "600",
	color: "rgb(100, 255, 218)",
	overflow: "hidden",
});

export const IntroTextBox = styled(Box, {
	width: "100%",
	fontSize: "1.15rem",
	fontWeight: "400",
	color: "inherit",
});

export const TextFlexBox = styled(Flex, {
	flexDirection: "column",
	gap: "12.5px",
	width: "inherit",
});
