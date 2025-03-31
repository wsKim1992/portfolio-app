import dayjs from "dayjs";

export const convertStrIntoDateFormat = (str: string): string => {
	return dayjs(str).format("YYYY-MM-DD").toString();
};
