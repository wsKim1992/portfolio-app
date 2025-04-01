import { useEffect, useRef } from "react";

import { Dialog } from "@radix-ui/themes";

import { setSliderAnimation } from "@utils/Experiences";

import { Title } from "@components/Common.style";
import {
	BriefInfoFlex,
	BriefInfoTitle,
	ContributionBox,
	ContributionLI,
	DescripttionBox,
	Domain,
	DomainBox,
	InnerDomainBox,
	ModalButton,
	ModalRoot,
	ProjectBox,
	ProjectCard,
	ProjectCardSlider,
	ProjectFlipper,
	ProjectImg,
	ProjectInfoBox,
	ProjectInner,
	ProjectTitle,
} from "@components/experiences/Common.style";
import DateRangeComponent from "@components/experiences/DateRangeComponent";
import DetailDialogContent from "@components/experiences/DetailDialog";

import TCTPaSSImg0 from "@assets/img/project/TCP_Pass_0.png";

const DomainComponent = () => {
	const outerRef = useRef<HTMLDivElement | null>(null);
	const innerRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (outerRef.current && innerRef.current) {
			setSliderAnimation({
				outerElem: outerRef.current,
				innerElem: innerRef.current,
			});
		}
	}, []);
	return (
		<BriefInfoFlex css={{ gap: "4.75px" }}>
			<BriefInfoTitle># Domain</BriefInfoTitle>
			<InnerDomainBox ref={outerRef}>
				<DomainBox ref={innerRef}>
					<Domain>Merge Request</Domain>
					<Domain>CICD</Domain>
					<Domain>Code Edittor</Domain>
				</DomainBox>
			</InnerDomainBox>
		</BriefInfoFlex>
	);
};

const Period = () => {
	return (
		<BriefInfoFlex>
			<BriefInfoTitle># 기간</BriefInfoTitle>
			<DateRangeComponent startDate="2024-05-01" endDate="2024-12-03" />
		</BriefInfoFlex>
	);
};

const Contribution = () => {
	return (
		<BriefInfoFlex
			css={{
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "initial",
				flex: "1",
			}}
		>
			<BriefInfoTitle css={{ textAlign: "left" }}>
				# 주요 성과{" "}
			</BriefInfoTitle>
			<ContributionBox as="ul">
				<ContributionLI as="li">
					Tree-Sitter 적용을 하여, Syntax Highlighting 성능 최적화 및
					language server 구현.
				</ContributionLI>
				<ContributionLI as="li">
					Tree-Sitter 적용을 하여, Syntax Highlighting 성능 최적화 및
					language server 구현.
				</ContributionLI>
				<ContributionLI as="li">
					Tree-Sitter 적용을 하여, Syntax Highlighting 성능 최적화 및
					language server 구현.
				</ContributionLI>
				<ContributionLI as="li">
					Tree-Sitter 적용을 하여, Syntax Highlighting 성능 최적화 및
					language server 구현.
				</ContributionLI>
			</ContributionBox>
		</BriefInfoFlex>
	);
};

const BriefInfo = () => {
	return (
		<ProjectFlipper className="flip-back">
			<ProjectTitle as="h4">#Brief Info</ProjectTitle>
			<Period />
			<DomainComponent />
			<Contribution />
			<ModalRoot>
				<Dialog.Trigger>
					<ModalButton>To Detail</ModalButton>
				</Dialog.Trigger>
				<DetailDialogContent />
			</ModalRoot>
		</ProjectFlipper>
	);
};

const Project = () => {
	return (
		<ProjectCard>
			<ProjectInner className="flip-inner">
				<ProjectFlipper className="flip-start">
					<ProjectImg asChild>
						<img src={TCTPaSSImg0} alt="project-thumbnail" />
					</ProjectImg>
					<ProjectInfoBox>
						<ProjectTitle as="h4">TCP PaSS : GAIA PX</ProjectTitle>
						<DescripttionBox
							css={{
								color: "var(--color-dark-primary)",
								textAlign: "center",
								fontSize: "0.85rem",
								lineHeight: "1.2rem",
							}}
						>
							TCP PaSS Platform 에서 구동되어져 있는 프로젝트들에
							대한 Dev-OPS 기능들을 제공해주는 도메인
						</DescripttionBox>
						<DescripttionBox
							css={{
								margin: "15px 0px",
								color: "var(--color-dark-primary)",
								fontSize: "0.85rem",
								lineHeight: "1.85rem",
							}}
						>
							프로젝트 등록 등의 도메인을 담당하였습니다. 담당
							도메인들에 대한 성능 최적화와 컴포넌트들의 공통화 및
							기능 함수들에 대한 추상화 작업을 통해 작업물의
							Qulity를 높히는데 기여했습니다.
						</DescripttionBox>
					</ProjectInfoBox>
				</ProjectFlipper>
				<BriefInfo />
			</ProjectInner>
		</ProjectCard>
	);
};

const Projects = () => {
	return (
		<ProjectBox>
			<Title as="h4" css={{ margin: "0px", fontSize: "1.6rem" }}>
				Projects
			</Title>
			<ProjectCardSlider>
				<Project />
				<Project />
			</ProjectCardSlider>
		</ProjectBox>
	);
};

export default Projects;
