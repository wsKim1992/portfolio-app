import { Text } from "@radix-ui/themes";

import AttendInfo from "@components/experiences/AttendInfo";
import {
	AttendInfoBox,
	Domain,
	DomainBox,
	ModalContentTitle,
	ModalTitleContentBox,
} from "@components/experiences/Common.style";
import DateRangeComponent from "@components/experiences/DateRangeComponent";

const DetailHeaderInfo = () => {
	return (
		<>
			<Text className="project-title">GAIA PX</Text>
			<ModalTitleContentBox>
				<Text className="sub-title">기간</Text>
				<DateRangeComponent
					startDate="2024-05-01"
					endDate="2024-12-03"
				/>
			</ModalTitleContentBox>
			<ModalTitleContentBox>
				<Text className="sub-title">참여 인원</Text>
				<AttendInfo
					data={{
						"front-end": 3,
						"back-end": 7,
						"product-Manager": 3,
					}}
				/>
			</ModalTitleContentBox>
			<ModalTitleContentBox>
				<ModalContentTitle>역할</ModalContentTitle>
				<AttendInfoBox>
					<Text className="text job-type">Front End 개발자</Text>
				</AttendInfoBox>
			</ModalTitleContentBox>
			<ModalTitleContentBox>
				<ModalContentTitle>Domain</ModalContentTitle>
				<DomainBox css={{ flexWrap: "nowrap" }}>
					<Domain css={{ fontSize: "0.95rem" }}>Merge Request</Domain>
					<Domain css={{ fontSize: "0.95rem" }}>CICD</Domain>
					<Domain css={{ fontSize: "0.95rem" }}>Code-Editor</Domain>
				</DomainBox>
			</ModalTitleContentBox>
		</>
	);
};

export default DetailHeaderInfo;
