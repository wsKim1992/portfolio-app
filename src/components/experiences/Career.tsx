import { type FC } from "react";

import { convertStrIntoDateFormat } from "@utils/Experiences";

import { Title } from "@components/Common.style";
import {
	CareerComponent,
	CompanyLogo,
	CompanyLogoCon,
	DateRange,
	DateStr,
	DescripttionBox,
	DetailInfo,
} from "@components/experiences/Common.style";
import Projects from "@components/experiences/Projects";

import TMaxCloudLogo from "@assets/img/company-logo/TmaxCloud.png";
import ImageLoadingGif from "@assets/img/image-loading.gif";

type CareerDetailProps = {
	companyName: string;
	startDate: string;
	endDate: string;
	description: string;
};

const CareerDetail: FC<CareerDetailProps> = ({
	companyName,
	startDate,
	endDate,
	description,
}) => {
	return (
		<DetailInfo>
			<Title as="h3" css={{ margin: "0px", fontSize: "1.9rem" }}>
				{companyName}
			</Title>
			<DateRange>
				<DateStr>{convertStrIntoDateFormat(startDate)}</DateStr>~
				<DateStr>{convertStrIntoDateFormat(endDate)}</DateStr>
			</DateRange>
			<DescripttionBox as="article">{description}</DescripttionBox>
			<Projects />
		</DetailInfo>
	);
};

const Career = () => {
	return (
		<CareerComponent>
			<CompanyLogoCon>
				<CompanyLogo asChild>
					<img
						src={ImageLoadingGif}
						data-img={TMaxCloudLogo}
						alt="tmax-cloud-logo"
					/>
				</CompanyLogo>
			</CompanyLogoCon>
			<CareerDetail
				companyName="Tmax Cloud"
				startDate="2024-05-01"
				endDate="2024-12-02"
				description="description description description description description description description"
			/>
		</CareerComponent>
	);
};

export default Career;
