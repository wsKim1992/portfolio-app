import { Box, Button, Flex, TabNav, Text } from "@radix-ui/themes";
import { keyframes, styled } from "@stitches/react";

//for cover page
export const BeforIntroText = styled(Text, {
	fontSize: "35.5px",
	fontWeight: "500",
	color: "#fff",
});

export const GreetingText = styled(Text, {
	fontSize: "55.5px",
	fontWeight: "600",
	color: "#fff",
});

export const BeforIntroAnimation = keyframes({
	"0%": {
		opacity: 0,
		transform: "translateY(30px) scaleX(0.0)",
	},
	"100%": {
		opacity: 1,
		transform: "translateY(0px) scaleX(1.0)",
	},
});

export const HighlightTextAnimation = keyframes({
	"0%": {
		color: "#fff",
		transform: "scaleX(0.0)",
	},
	"100%": {
		color: "rgb(100, 255, 218)",
		transform: "scaleX(1.0)",
	},
});

export const GreetingTextAnimation = keyframes({
	"0%": {
		opacity: 0,
		transform: "translateY(60px)",
	},
	"100%": {
		opacity: 1,
		transform: "translateY(0px)",
	},
});

//for main page

export const LinkWrapper = styled(Box, {
	width: "65px",
	height: "65px",
	borderRadius: "32.5px",
	boxSizing: "border-box",
	background: "rgb(58, 134, 255)",
	transition: "background 0.65s ease-out",
	color: "#fff",
	cursor: "pointer",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	"&:hover": {
		background: "rgb(100, 255, 218)",
		".url-link": {
			transform: "scaleX(1.0)",
			opacity: "1",
		},
	},
});

export const URLLink = styled(Box, {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "10px",
	position: "absolute",
	left: "0px",
	width: "fit-content",
	height: "inherit",
	padding: "10.5px",
	paddingLeft: "65.5px",
	boxSizing: "border-box",
	borderRadius: "inherit",
	fontSize: "19.5px",
	fontWeight: "bold",
	border: "3px solid rgb(100, 255, 218)",
	background: "transparent",
	color: "#fff",
	transition: "transform 0.65s ease-out",
	transform: "scaleX(0.0)",
	transformOrigin: "center left",
	opacity: "0",
	overflow: "hidden",
});

export const SubNavAppear = keyframes({
	"0%": {
		opacity: "0",
		transform: "translateY(-10px)",
	},
	"100%": {
		opacity: "1",
		transform: "translateY(0px)",
	},
});

export const MainPageLayout = styled(Box, {
	width: "100dvw",
	height: "100dvh",
	overflowX: "hidden",
	overflowY: "auto",
	background: "#0A192F",
});

export const Navigation = styled(Flex, {
	width: "100%",
	padding: "15.5px",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	boxSizing: "border-box",
	background: "#112240",
});

export const TabNavElem = styled(TabNav.Link, {
	fontSize: "15.5px",
	fontWeight: "500",
	transition: "color 0.35s",
	color: "#fff",
	padding: "10px",
	cursor: "pointer",
	opacity: "0",
	animationFillMode: "both",
	animation: `${SubNavAppear} 0.5s ease-out forwards`,
	"&:hover": {
		color: "#3A86FF",
	},
});

export const BackgrounContainer = styled(Box, {
	backgroundImage: "url(/src/assets/img/code.png)",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	width: "100dvw",
	height: "100dvh",
	overflow: "hidden",
	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-end",
	alignItems: "center",
});

export const StyledButton = styled(Button, {
	width: "fit-content",
	padding: "10px 3.5px",
	boxSizing: "border-box",
	fontSize: "21.5px",
	fontWeight: "400",
	borderRadius: "5.5px",
	background: "rgb(119, 190, 211)",
	color: "#fff",
	transform: "background 0.55s",
	"&:hover": {
		background: "rgb(5, 8, 39)",
	},
	cursor: "pointer",
});

const LoadHashTag = keyframes({
	"0%": {
		transform: "translateY(100px)",
		opacity: "0",
	},
	"100%": {
		transform: "translateY(0px)",
		opacity: "1",
	},
});

export const HashTagContainer = styled(Box, {
	padding: "15.5px 15px",
	borderRadius: "25.5px",
	border: "5px solid transparent",
	position: "absolute",
	top: `calc(50% + 30px)`,
	left: "calc(50% + 40px)",
	zIndex: 1,
	fontSize: "22.5px",
	fontWeight: "bold",
	backgroundColor: "linear-gradient(45deg,rgb(108, 227, 255), #FF8C00)",
	backgroundClip: "text",
	animation: `${LoadHashTag} 1.8s 1 both`,
	"-webkit-text-fill-color": "#fff",
	"&::before": {
		content: '""',
		position: "absolute",
		top: "-5px",
		left: "-5px",
		right: "-5px",
		bottom: "-5px",
		borderRadius: "30.5px",
		background: "linear-gradient(45deg, rgb(180, 210, 255), #FF8C00)",
		zIndex: -1,
	},
	"&::after": {
		content: '""',
		position: "absolute",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		borderRadius: "25.5px",
		background: "rgb(35,57,116)",
		zIndex: -1,
	},
});
