import { createRef, useEffect } from "react";

import { useLocation } from "react-router-dom";

import Experiences from "@pages/experiences";
import Intro from "@pages/intro";
import Projects from "@pages/projects";
import TechStacks from "@pages/techStacks";
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
import SubPageLayout from "@components/SubPageLayout";

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
	const introPageRef = createRef<{ scrollWithIn: () => void }>();
	const expPageRef = createRef<{ scrollWithIn: () => void }>();
	const techStacksRef = createRef<{ scrollWithIn: () => void }>();
	const projectsRef = createRef<{ scrollWithIn: () => void }>();
	const { hash } = useLocation();
	useEffect(() => {
		if (introPageRef.current && hash === "#intro") {
			introPageRef.current.scrollWithIn();
		} else if (expPageRef.current && hash === "#experiences") {
			expPageRef.current.scrollWithIn();
		} else if (techStacksRef.current && hash === "#tech-stacks") {
			techStacksRef.current.scrollWithIn();
		} else if (projectsRef.current && hash === "#projects") {
			projectsRef.current.scrollWithIn();
		}
	}, [hash]);
	return (
		<MainPageLayout>
			<NavigationComponent />
			<Cover />
			<Links />
			<SubPageLayout
				hash="#intro"
				ref={introPageRef}
				css={{ overflow: "hidden", background: "orange" }}
			>
				<Intro />
			</SubPageLayout>
			<SubPageLayout
				hash="#experiences"
				ref={expPageRef}
				css={{ overflow: "hidden", background: "red" }}
			>
				<Experiences />
			</SubPageLayout>
			<SubPageLayout
				hash="#tech-stacks"
				ref={techStacksRef}
				css={{ overflow: "hidden" }}
			>
				<TechStacks />
			</SubPageLayout>
			<SubPageLayout
				ref={projectsRef}
				hash="#projects"
				css={{ overflow: "hidden" }}
			>
				<Projects />
			</SubPageLayout>
		</MainPageLayout>
	);
};

export default MainPage;
