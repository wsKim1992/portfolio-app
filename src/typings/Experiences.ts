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
