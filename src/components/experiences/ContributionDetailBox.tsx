import { Text } from "@radix-ui/themes";

import CollapseComponent from "@components/experiences/CollapseComponent";
import {
	ContributeDataBox,
	ContributeDetail,
} from "@components/experiences/Common.style";
import Statistic from "@components/experiences/Statistic";

const ContributionDetailBox = () => {
	return (
		<ContributeDetail>
			<Text className="title">
				Chart Component 의 동적 로딩을 통한 성능 개선
			</Text>
			<CollapseComponent
				TriggerBox={<Text>성능 통계</Text>}
				ContentBox={
					<ContributeDataBox>
						<Statistic
							title="LCP"
							before={8.7}
							after={4.5}
							unit="sec"
						/>
						<Statistic
							title="Bundling Size"
							before={6.4}
							after={4.5}
							unit="mb"
						/>
						<Statistic
							title="Bundling Size"
							before={6.4}
							after={4.5}
							unit="mb"
						/>
					</ContributeDataBox>
				}
			/>
			<CollapseComponent
				TriggerBox={<Text>상세</Text>}
				ContentBox={
					<Text>
						descriptiondescriptiondescriptiondescriptiondescriptiondescription
					</Text>
				}
			/>
		</ContributeDetail>
	);
};

export default ContributionDetailBox;
