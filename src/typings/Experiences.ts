import { type Dayjs } from "dayjs";

export type TCareer = {
	companyLogo: string;
	companyName: string;
	startDate: Dayjs;
	endDate: Dayjs;
	description: string;
	projects: TProject[];
};
export type TProject = {
	title: string;
	imgSrc: string;
	subDescription: string;
	description: string;
	role: TJobType;
	briefInfo: {
		startDate: Dayjs;
		endDate: Dayjs;
		domains: TDomain;
		attendInfo: { [key in TJobType]: TAttendData };
		contributions: TContribution[];
		techStacks: TTechStackData[];
	};
};

export type TContribution = {
	title: string;
	statistic: TStatistic[];
	description: string;
};

export type TStatistic = {
	title: string;
	before: number;
	after: number;
	unit: string;
};

export type TDomain = {
	title: string;
	description: string;
};

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
