import { type TSubNav } from "@typings/Common";

export const omit = <T extends object>({
	obj,
	keys,
}: {
	obj: T;
	keys: (keyof T)[];
}) => {
	return Object.fromEntries(
		Object.entries(obj).filter(([key]) => !keys.includes(key as keyof T))
	);
};

export const isSubNavKey = (str: string): str is keyof TSubNav => {
	return ["intro", "experiences", "techStacks", "projects"].includes(str);
};
