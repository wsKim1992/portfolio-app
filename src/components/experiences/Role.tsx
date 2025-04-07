import { Dialog, Text } from "@radix-ui/themes";

import CollapseComponent from "@components/experiences/CollapseComponent";
import {
	ContentFlex,
	ContributionInRole,
	Domain,
	RoleBox,
} from "@components/experiences/Common.style";

const Contribution = () => {
	return (
		<ContributionInRole>
			<CollapseComponent
				TriggerBox={
					<Domain css={{ fontSize: "0.95rem" }}>Merge Request</Domain>
				}
				ContentBox={
					<ContentFlex>
						<Text className="description">
							GIT Lab/ GIT Hub 의 Merge 기능 처럼, 프로젝트의
							상태를 업데이트 및 유지보수 해주는 기능을
							구현했습니다. &nbsp; Git lab/Git hub 처럼, commit 들
							간의 파일 변경사항을 비교해서 보여주는 기능과,
							conflict 해결기능 등을 구현하였습니다.
						</Text>
					</ContentFlex>
				}
			/>
		</ContributionInRole>
	);
};

const Role = () => {
	return (
		<RoleBox>
			<RoleBox css={{ gap: "0.75rem" }}>
				<Contribution />
				<Contribution />
			</RoleBox>
		</RoleBox>
	);
};

export default Role;
