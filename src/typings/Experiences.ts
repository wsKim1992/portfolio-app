export type TJobType = "front-end" | "back-end" | "product-Manager";

export type TAttendName = {
	readonly [key in TJobType]: string;
};

export type TAttendData = {
	readonly [key in TJobType]?: number;
};

export type TDetailTabVal =
	| "description"
	| "role"
	| "contribution"
	| "techStacks";

export type TDetailTabName = {
	readonly [key in TDetailTabVal]: string;
};

export type TTechStackEnum =
	| "all"
	| "bundler"
	| "languageOrFramework"
	| "stateManagement";

export type TTechStackName = {
	[key in TTechStackEnum]: string;
};

export type TTechStackElem = {
	name: string;
	type: TTechStackEnum;
	description: string;
	src: string;
};

export type TTechStackData = TTechStackElem[];
