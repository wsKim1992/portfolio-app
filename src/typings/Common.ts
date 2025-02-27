export type TPathObj = {
	main: "/main";
	opening: "/";
	intro: "/intro";
	experience: "/experiences";
	techStacks: "/tech-stacks";
	projects: "/projects";
};
export type TSubNav = {
	[index in keyof Omit<TPathObj, "main" | "opening">]: {
		text: string;
		link: Partial<TPathObj>[keyof Partial<TPathObj>];
	};
};
