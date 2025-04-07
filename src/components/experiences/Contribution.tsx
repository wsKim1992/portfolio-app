import { Text } from "@radix-ui/themes";

import Slider from "@components/Slider";
import ContributionDetailBox from "@components/experiences/ContributionDetailBox";
import DialogContent from "@components/experiences/DialogContent";

const Contribution = () => {
	return (
		<DialogContent
			HeaderComp={
				<Text className="project-title">성과 (Contribution)</Text>
			}
			descriptionCss={{ width: "100%" }}
			outerCss={{ height: "calc(100dvh - 10px)" }}
		>
			<Slider>
				<ContributionDetailBox />
				<ContributionDetailBox />
				<ContributionDetailBox />
			</Slider>
		</DialogContent>
	);
};

export default Contribution;
