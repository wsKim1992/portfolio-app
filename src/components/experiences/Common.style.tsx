import { Box, Flex, Text } from "@radix-ui/themes";
import { styled } from "@stitches/react";

import { Title } from "@components/Common.style";

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
	width: "155.5px",
	height: "155.5px",
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

export const DateRange = styled(Flex, {
	flexDirection: "row",
	gap: "0.85rem",
	fontSize: "1.5rem",
	fontWeight: "500",
	color: "var(--color-base-background)",
});

export const DateStr = styled(Text, {
	opacity: "1",
	transition: "transform 0.35s ease-in, opacity 0.25s ease-in",
	fontSize: "inherit",
	fontWeight: "inherit",
	border: "3px solid var(--color-base-secondary)",
	boxSizing: "border-box",
	borderRadius: "15px",
	padding: "2.5px",
	color: "var(--color-base-background)",
	background:
		"linear-gradient(to left, var(--color-base-primary), var(--color-base-secondary))",
	"-webkit-background-clip": "text",
	"-webkit-text-fill-color": "transparent",
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
	width: "355px",
	height: "550px",
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
	display: "flex",
	flexDirection: "column",
	gap: "8.5px",
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "0px",
	left: "0px",
	background: "var(--color-base-background)",
	borderRadius: "15.5px",
	boxSizing: "border-box",
	overflow: "hidden",
	backfaceVisibility: "hidden",
	"&.flip-front": {
		transform: "rotateY(0deg)",
	},
	"&.flip-back": {
		transform: "rotateY(180deg)",
	},
});

export const ProjectImg = styled(Box, {
	display: "block",
	objectFit: "contain",
	width: "100%",
	height: "155px",
});

export const ProjectInfoBox = styled(Box, {
	flex: "1",
	width: "100%",
});

export const ProjectTitle = styled(Title, {
	margin: "0px",
	fontSize: "1.6rem",
	textAlign: "center",
	color: "var(--color-dark-primary)",
});

export const BriefInfoTitle = styled(ProjectTitle, {
	fontSize: "1.15rem",
	color: "var(--color-base-primary)",
	flexShrink: "0",
});

export const BriefInfoFlex = styled(Flex, {
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
});

export const DomainBox = styled(Box, {
	whiteSpace: "nowrap",
	height: "fit-content",
	transition: "transform 2.5s",
	transform: "translate3D(0%,0px,-5px)",
	width: "fit-content",
});

export const InnerDomainBox = styled(Box, {
	flex: "1",
	overflow: "hidden",
	padding: "2px 0px",
});

export const Domain = styled(DateStr, {
	marginLeft: "2.5px",
	background:
		"linear-gradient(var(--color-base-background),var(--color-base-background)) padding-box ,linear-gradient(to left, var(--color-base-primary), var(--color-base-border)) border-box",
	border: "2px solid transparent",
	color: "var(--color-base-text)",
	"-webkit-text-fill-color": "var(--color-base-primary)",
	fontSize: "1.15rem",
});

export const ContributionBox = styled(Flex, {
	display: "flex",
	width: "100%",
	flexDirection: "column",
	gap: "18.5px",
	listStyleImage: "url(/static/img/project/check.svg)",
	margin: "0px",
	padidng: "0px",
});

export const ContributionLI = styled(Box, {
	width: "100%",
	fontSize: "0.85rem",
	fontWeight: "500",
	whiteSpace: "pre-wrap",
});
