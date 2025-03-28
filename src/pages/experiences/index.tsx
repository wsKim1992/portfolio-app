import { Title } from "@components/Common.style";
import Careers from "@components/experiences/Careers";
import { InnerLayout } from "@components/experiences/Common.style";

export const Experiences = () => {
	return (
		<InnerLayout>
			<Title as="h2" css={{ width: "inherit" }}>
				Experiences
			</Title>
			<Careers />
		</InnerLayout>
	);
};

export default Experiences;
