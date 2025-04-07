import { Dialog, Text } from "@radix-ui/themes";

import Slider from "@components/Slider";
import {
	ModalButton,
	ModalConTent,
	ModalDescription,
	ModalTitle,
} from "@components/experiences/Common.style";
import ContributionDetailBox from "@components/experiences/ContributionDetailBox";

const Contribution = () => {
	return (
		<ModalConTent
			maxWidth={"850px"}
			css={{ height: "calc(100dvh - 10px)" }}
		>
			<ModalTitle>
				<Text className="project-title">성과 (Contribution)</Text>
			</ModalTitle>
			<ModalDescription as={"div"} css={{ width: "100%" }}>
				<Slider>
					<ContributionDetailBox />
					<ContributionDetailBox />
					<ContributionDetailBox />
				</Slider>
			</ModalDescription>
			<Dialog.Close>
				<ModalButton>Close</ModalButton>
			</Dialog.Close>
		</ModalConTent>
	);
};

export default Contribution;
