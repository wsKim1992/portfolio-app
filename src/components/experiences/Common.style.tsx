import { Box, Flex, Text } from "@radix-ui/themes";
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
});

export const CareerComponent = styled(Flex, {
	flexDirection: "row",
	gap: "15.5px",
	width: "inherit",
	height: "fit-contents",
});

export const CompanyLogoCon = styled(Box, {
	width: "105.5px",
	height: "105.5px",
	borderRadius: "100%",
	padding: "5px",
	boxSizing: "border-box",
	background: "var(--color-base-primary)",
	"&:hover": {
		background: "var(--color-base-secondary)",
	},
	overflow: "hidden",
});

export const CompanyLogo = styled(Box, {
	width: "100%",
	height: "100%",
	objectFit: "contain",
	borderRadius: "100%",
	background: "var(--color-base-background)",
	cursor: "pointer",
});

export const SeperateLine = styled(Box, {
	width: "1px",
	height: "100px",
	background: "var(--color-base-background)",
});

export const DetailInfo = styled(Flex, {
	flexDirection: "column",
	gap: "15.5px",
	flex: "1",
	height: "fit-content",
	padding: "0px 15.5px",
	boxSizing: "border-box",
});

export const DateRange = styled(Box, {
	fontSize: "1.5rem",
	fontWeight: "500",
	color: "var(--color-base-background)",
});

export const DateStr = styled(Text, {
	opacity: "1",
	transition: "transform 0.35s ease-in, opacity 0.25s ease-in",
	fontSize: "inherit",
	fontWeight: "inherit",
});

export const DescripttionBox = styled(Box, {
	width: "inherit",
	height: "fit-content",
	fontSize: "1.3rem",
	fontWeight: "400",
	color: "var(--color-base-background)",
});

export const ProjectBox = styled(Flex, {
	width: "100%",
	height: "fit-content",
	gap: "15.5px",
	flexDirection: "column",
});

export const ProjectCardSlider = styled(Flex, {
	overflow: "hidden",
	overflowX: "auto",
	flexDirection: "row",
	minWidth: "0px",
	gap: "15.5px",
	cursor: "pointer",
});

export const ProjectCard = styled(Box, {
	background: "var(--color-base-background)",
	width: "255px",
	height: "350px",
	padding: "10px",
	boxSizing: "border-box",
	borderRadius: "15.5px",
	perspective: "500px",
	perspectiveOrigin: "50% 50%",
	"&:hover": {
		".flip-inner": {
			transform: "rotateY(180deg)",
		},
	},
});

export const ProjectInner = styled(Box, {
	width: "100%",
	height: "100%",
	transformStyle: "preserve-3d",
	transition: "transform 0.45s ease-in",
	position: "relative",
});

export const ProjectFlipper = styled(Box, {
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "0px",
	left: "0px",
	background: "var(--color-base-background)",
	borderRadius: "15.5px",
	boxSizing: "border-box",

	backfaceVisibility: "hidden",
	"&.flip-front": {
		transform: "rotateY(0deg)",
	},
	"&.flip-back": {
		transform: "rotateY(180deg)",
	},
});
