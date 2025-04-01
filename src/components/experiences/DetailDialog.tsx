import { Dialog, Tabs, Text } from "@radix-ui/themes";

import { detailTabName } from "@constants/experiences";

import { type TDetailTabVal } from "@typings/Experiences";

import AttendInfo from "@components/experiences/AttendInfo";
import {
	ModalButton,
	ModalDescription,
	ModalTabList,
	ModalTabRoot,
	ModalTabTrigger,
	ModalTitle,
	ModalTitleContentBox,
	MotalTabContent,
} from "@components/experiences/Common.style";
import DateRangeComponent from "@components/experiences/DateRangeComponent";

const DetailDialogContent = () => {
	return (
		<Dialog.Content maxWidth={"850px"} maxHeight={"750px"}>
			<ModalTitle>
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
			</ModalTitle>
			<ModalDescription as={"div"}>
				<ModalTabRoot defaultValue="description">
					<ModalTabList color="red">
						{Object.keys(detailTabName).map(elem => (
							<ModalTabTrigger key={elem} value={elem}>
								{detailTabName[elem as TDetailTabVal]}
							</ModalTabTrigger>
						))}
					</ModalTabList>
				</ModalTabRoot>
			</ModalDescription>
			<Dialog.Close>
				<ModalButton>close</ModalButton>
			</Dialog.Close>
		</Dialog.Content>
	);
};

export default DetailDialogContent;
