import {
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	NotionLogoIcon,
} from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";

import { MainPageLayout } from "@components/Common.style";
import Cover from "@components/Cover";
import LinkComponent from "@components/LinkComponent";
import NavigationComponent from "@components/Navigation";

const Links = () => {
	return (
		<Flex
			direction={"column"}
			gap={"10px"}
			style={{
				width: "fit-content",
				position: "fixed",
				left: "55px",
				bottom: "100px",
			}}
		>
			<LinkComponent
				link={"https://github.com/wsKim1992"}
				Icon={GitHubLogoIcon}
			/>

			<LinkComponent
				link={
					"https://www.notion.so/Front-End-1159c9380598801cb4fcc92134a80349?pvs=4"
				}
				Icon={NotionLogoIcon}
			/>
			<LinkComponent
				link={"wooseokkim1992@gmail.com"}
				Icon={EnvelopeClosedIcon}
			/>
		</Flex>
	);
};

const MainPage = () => {
	return (
		<MainPageLayout>
			<NavigationComponent />
			<Cover />
			<Links />
		</MainPageLayout>
	);
};

export default MainPage;
