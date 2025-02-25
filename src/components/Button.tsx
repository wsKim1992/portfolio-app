import { type FC } from "react";

import { type CSS, styled } from "@stitches/react";

import { StyledButton } from "@components/Common.style";

type ButtonProps = {
	text: string;
	css?: CSS;
	handleClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, css, handleClick }) => {
	const NewStyledBtn = styled(StyledButton, css ?? {});
	return <NewStyledBtn onClick={handleClick}>{text}</NewStyledBtn>;
};

export default Button;
