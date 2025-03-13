export type TPathObj = {
	main: "/main";
	opening: "/";
	intro: "#intro";
	experiences: "#experiences";
	techStacks: "#tech-stacks";
	projects: "#projects";
};
export type TSubNav = {
	[index in keyof Omit<TPathObj, "main" | "opening">]: {
		text: string;
		link: Omit<TPathObj, "main" | "opening">[keyof Partial<
			Omit<TPathObj, "main" | "opening">
		>];
	};
};
