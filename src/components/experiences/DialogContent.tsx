import { type FC, type ReactNode } from "react";

import { Dialog } from "@radix-ui/themes";
import { type CSS } from "@stitches/react";

import {
	ModalButton,
	ModalConTent,
	ModalDescription,
	ModalTitle,
} from "@components/experiences/Common.style";

type DialogProps = {
	maxWidth?: string;
	maxHeight?: string;
	HeaderComp: ReactNode;
	outerCss?: CSS;
	descriptionCss?: CSS;
	children: ReactNode;
};

const DialogContent: FC<DialogProps> = ({
	HeaderComp,
	outerCss,
	descriptionCss,
	maxHeight = "950px",
	maxWidth = "850px",
	children,
}) => {
	return (
		<ModalConTent css={outerCss} maxWidth={maxWidth} maxHeight={maxHeight}>
			<ModalTitle>{HeaderComp}</ModalTitle>
			<ModalDescription css={descriptionCss} as={"div"}>
				{children}
			</ModalDescription>
			<Dialog.Close>
				<ModalButton>Close</ModalButton>
			</Dialog.Close>
		</ModalConTent>
	);
};

export default DialogContent;
