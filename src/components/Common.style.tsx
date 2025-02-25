import { Box, Button } from "@radix-ui/themes";
import { styled } from "@stitches/react";

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
