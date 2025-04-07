import { Dialog } from "@radix-ui/themes";

import {
	ModalButton,
	ModalConTent,
	ModalDescription,
	ModalTitle,
} from "@components/experiences/Common.style";
import DetailHeaderInfo from "@components/experiences/DetailHeaderInfo";
import Role from "@components/experiences/Role";

const DetailDialogContent = () => {
	return (
		<ModalConTent maxWidth={"850px"} maxHeight={"950px"}>
			<ModalTitle>
				<DetailHeaderInfo />
			</ModalTitle>
			<ModalDescription>
				<Role />
			</ModalDescription>
			<Dialog.Close>
				<ModalButton>Close</ModalButton>
			</Dialog.Close>
		</ModalConTent>
	);
};

export default DetailDialogContent;
