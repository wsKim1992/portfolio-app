import { createRef, useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

import Experiences from "@pages/experiences";
import Intro from "@pages/intro";
import Projects from "@pages/projects";
import TechStacks from "@pages/techStacks";

import { useCommonStore } from "@stores/CommonStore";

import { introObserverFactory } from "@utils/MainPage";

import { MainPageLayout } from "@components/Common.style";
import Cover from "@components/MainPage/Cover";
import Links from "@components/MainPage/Links";
import NavigationComponent from "@components/MainPage/Navigation";
import SubPageLayout from "@components/MainPage/SubPageLayout";

const MainPage = () => {
	const setIntroElemObserver = useCommonStore(
		state => state.setIntroElemObserver
	);
	const initIntroElemObserver = useCommonStore(
		state => state.initIntroElemObserver
	);

	const wrapperElemRef = useRef<HTMLDivElement | null>(null);
	const introPageRef = createRef<{ scrollWithIn: () => void }>();
	const expPageRef = createRef<{ scrollWithIn: () => void }>();
	const techStacksRef = createRef<{ scrollWithIn: () => void }>();
	const projectsRef = createRef<{ scrollWithIn: () => void }>();
	const { hash } = useLocation();

	useEffect(() => {
		if (wrapperElemRef.current) {
			setIntroElemObserver(
				introObserverFactory({ rootElem: wrapperElemRef.current })
			);
		}
		return () => {
			initIntroElemObserver();
		};
	}, []);

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
		<MainPageLayout ref={wrapperElemRef}>
			<NavigationComponent />
			<Cover />
			<Links />
			<SubPageLayout
				hash="#intro"
				ref={introPageRef}
				css={{
					overflow: "hidden",
					height: "fit-content",
					paddingBottom: "45px",
				}}
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
