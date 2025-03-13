import { createBrowserRouter } from "react-router-dom";

import MainPage from "@pages/mainPage";
import OpeningPage from "@pages/openingPage";

import { type TPathObj, type TSubNav } from "@typings/Common";

export const pathObj: TPathObj = {
	main: "/main",
	opening: "/",
	intro: "#intro",
	experiences: "#experiences",
	techStacks: "#tech-stacks",
	projects: "#projects",
};
export const subNavObj: TSubNav = {
	intro: {
		text: "Intro",
		link: "#intro",
	},
	experiences: {
		text: "experiences",
		link: "#experiences",
	},
	techStacks: {
		text: "tech stacks",
		link: "#tech-stacks",
	},
	projects: {
		text: "projects",
		link: "#projects",
	},
};

export const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				Component: OpeningPage,
			},
		],
	},
	{
		path: pathObj.main,
		Component: MainPage,
	},
]);
