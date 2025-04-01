import { type FC } from "react";

import { Text } from "@radix-ui/themes";

import { attendName } from "@constants/experiences";

import { type TAttendData } from "@typings/Experiences";

import {
	AttendInfoBox,
	ModalTitleContentBox,
} from "@components/experiences/Common.style";

type TAttendInfo = {
	data: TAttendData;
};

const AttendInfo: FC<TAttendInfo> = ({ data }) => {
	return (
		<ModalTitleContentBox>
			{Object.keys(data).map(elem => (
				<AttendInfoBox key={elem}>
					<Text className="text job-type">
						{attendName[elem as keyof TAttendData]}
					</Text>
					<Text className="text">
						{data[elem as keyof TAttendData]}명
					</Text>
				</AttendInfoBox>
			))}
		</ModalTitleContentBox>
	);
};

export default AttendInfo;
