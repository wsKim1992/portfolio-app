import { type FC } from "react";

import { convertStrIntoDateFormat } from "@utils/Experiences";

import { DateRange, DateStr } from "@components/experiences/Common.style";

type TPeriod = {
	startDate: string;
	endDate: string;
};

const DateRangeComponent: FC<TPeriod> = ({ startDate, endDate }) => {
	return (
		<>
			<DateRange
				css={{
					color: "var(--color-base-primary)",
				}}
			>
				<DateStr
					css={{
						fontSize: "1.15rem",
						color: "inherit",
						border: "unset",
					}}
				>
					{convertStrIntoDateFormat(startDate)}
				</DateStr>
				-
				<DateStr
					css={{
						fontSize: "1.15rem",
						color: "inherit",
						border: "unset",
					}}
				>
					{convertStrIntoDateFormat(endDate)}
				</DateStr>
			</DateRange>
		</>
	);
};

export default DateRangeComponent;
