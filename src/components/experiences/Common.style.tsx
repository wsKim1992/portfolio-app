import { Box, Flex } from "@radix-ui/themes";
import { styled } from "@stitches/react";

export const InnerLayout = styled(Box, {
	width: "1280px",
	height: "fit-content",
	margin: "0 auto",
	paddingTop: "15.5px",
	boxSizing: "border-box",
});

export const CareerContainer = styled(Flex, {
	width: "inherit",
	height: "fit-content",
	flexDirection: "column",
	gap: "15.5px",
	background: "var(--color-base-primary)",
});
