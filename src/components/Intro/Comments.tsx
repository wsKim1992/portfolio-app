import { Text } from "@radix-ui/themes";

import IntroBox from "@components/Intro/IntroBox";
import { HighlightedText } from "@components/Intro/IntroBox";

const Comments = () => {
	return (
		<>
			<IntroBox
				subtitle="Q: 당신은 어떤 개발자 인가요?"
				text={
					<Text>
						저는 <HighlightedText>Tactical</HighlightedText>한
						개발자 입니다. 프로젝트에 임할 때, 장/단기 간의 목표와
						업무의 우선순위를 적절하게 설정합니다. <br /> 또한 개발
						결과물의 <HighlightedText>Quality</HighlightedText>를
						최적화 하기 위해서, 제품에 대한 본질과 기획 그리고 대상
						사용자들에 대한 깊은 이해를 우선으로 한 채로 개발작업을
						진행합니다.
					</Text>
				}
			/>
			<IntroBox
				subtitle="Q: 소프트웨어 개발을 할 때 어떤 방식으로 작업을 진행하나요?"
				text={
					<Text>
						1. 편리하게 유지 보수 할 수 있고, &nbsp; 반복성이
						최소화된{" "}
						<HighlightedText>Clean Architecture</HighlightedText>
						형태를 갖춘 CodeBase 형태를 지향합니다. 모듈간의
						<HighlightedText> 관심사 분리</HighlightedText>와
						<HighlightedText>추상화 (Abstraction)</HighlightedText>{" "}
						과정을 통해 <HighlightedText>유연성</HighlightedText>과{" "}
						<HighlightedText>확장성</HighlightedText> 을 지닌
						소프트웨어 Archtecture를 적용하기 위해 노력합니다.
						<br />
						<br />
						2. <HighlightedText>Agile</HighlightedText> 한 방식으로
						작업을 진행해 왔습니다.{" "}
						<HighlightedText>Scrum</HighlightedText> 회의를 통해서
						다양한 직군에 소속된 동료들과 직면한 문제를 다각도로
						접근합니다. <br />
						또한, 지속적인 회고를 통해, 개선사항을 다음번{" "}
						<HighlightedText>Sprint</HighlightedText>에 적극
						반영하여, 제품의 품질을 높혔습니다.
					</Text>
				}
			/>
			<IntroBox
				subtitle="Q: 커리어의 궁국적인 목표는?"
				text={
					<Text>
						<HighlightedText>대체 불가능한 개발자</HighlightedText>
						가 되는 것이 목표입니다. 그렇다면, 대체가 불가능한
						개발자란 어떤 개발자일 까요? 그리고 대체가 불가능한
						인재가 되기 위해선 어떤 역량들을 갖춰야 할까요?
					</Text>
				}
			/>
			<IntroBox
				subtitle="Q: 대체 불가능한 개발자와 갖춰야 할 역량이란?"
				text={
					<Text>
						<HighlightedText>대체 불가능한 개발자</HighlightedText>
						란 꾸준한 Performace 를 통해 소속된 회사에 꾸준한 수익을
						만들어 주는 개발자 입니다.{" "}
						<HighlightedText>Front End 개발자</HighlightedText>는
						고객에게 서비스를 전달하는 매개체를 개발합니다. 그렇기
						때문에, 사용자가 고객이 되게 만드는{" "}
						<HighlightedText>User Experience</HighlightedText>를
						제공하기 위해서는, 개발 및
						<HighlightedText>Computer Science</HighlightedText> 에
						대한 지식들과{" "}
						<HighlightedText>
							제품과 고객들에 대한 통찰
						</HighlightedText>{" "}
						이 필요합니다. 이러한 커리어의 목표를 달성하기 위해,
						운영체제와 컴퓨터 구조 및 front end 지식들에 대한 꾸준한
						학습을 통해 개발 능력을 꾸준히 길러 왔습니다. 그리고
						담당하고 있는 제품과 고객들을 여러 관점에서 이해하기
						위하여, 인문학과 사회현상에 대하여 연구하고
						고찰하였습니다.
						<br /> <br />
					</Text>
				}
			/>
		</>
	);
};

export default Comments;
