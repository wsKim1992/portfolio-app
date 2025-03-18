import { type FC, type ReactNode, memo, useEffect, useRef } from "react";

import { Box, Flex, Text } from "@radix-ui/themes";
import { styled } from "@stitches/react";
import { useShallow } from "zustand/shallow";

import { useCommonStore } from "@stores/CommonStore";

import { Title } from "@components/Common.style";

const IntroInnerLayout = styled(Box, {
	margin: "0 auto",
	boxSizing: "border-box",
	width: "1280px",
	fontSize: "35.5px",
});

const IntroBoxElem = styled(Box, {
	width: "64.5%",
	height: "fit-content",
	padding: "20px",
	boxSizing: "border-box",
	background: "rgb(58, 134, 255)",
	borderRadius: "1rem",
});

const HighlightedText = styled(Text, {
	fontSize: "inherit",
	fontWeight: "600",
	color: "rgb(100, 255, 218)",
});

const IntroTextBox = styled(Box, {
	width: "100%",
	fontSize: "1.15rem",
	fontWeight: "400",
	color: "#fff",
});

const IntroBox: FC<{ subtitle: string; text: ReactNode; idx: number }> = ({
	subtitle,
	text,
	idx = 0,
}) => {
	return (
		<IntroBoxElem
			className="intro-box"
			css={{
				transition: "transform 0.65s linear",
				transform: "translate3d(0, 0, 0) scale(0.0, 0.0)",
			}}
		>
			<Title css={{ fontSize: "1.5rem", fontWeight: "600" }}>
				{subtitle}
			</Title>
			<IntroTextBox>{text}</IntroTextBox>
		</IntroBoxElem>
	);
};

const TextFlexBox = styled(Flex, {
	flexDirection: "column",
	gap: "12.5px",
	width: "inherit",
});

export const Intro = memo(() => {
	const elemRef = useRef<HTMLDivElement | null>(null);
	const introElemObserver = useCommonStore(
		useShallow(state => state.introElemObserver)
	);
	useEffect(() => {
		if (introElemObserver && elemRef.current) {
			introElemObserver.observe(elemRef.current);
			return () => {
				elemRef.current && introElemObserver.unobserve(elemRef.current);
			};
		}
	}, [introElemObserver]);
	return (
		<IntroInnerLayout>
			<Title as="h2" css={{ width: "inherit" }}>
				Intro
			</Title>
			<TextFlexBox className="intro-box-layout" ref={elemRef}>
				<IntroBox
					idx={0}
					subtitle="Q: 당신은 어떤 개발자 인가요?"
					text={
						<Text>
							저는 <HighlightedText>Tactical</HighlightedText>한
							개발자 입니다. 제품과 담당한 제품의 본질과 기획과
							제품의{" "}
							<HighlightedText>User Interaction</HighlightedText>{" "}
							에 대하여 심도있는 이해를 최우선으로 합니다.&nbsp;
							그리고 편안한{" "}
							<HighlightedText>User Experience</HighlightedText>를
							제공하기 위해, 기능의 최적화를 위하여 끊임없이
							연구합니다.
						</Text>
					}
				/>
				<IntroBox
					idx={1}
					subtitle="Q: 당신은 어떤 개발자 인가요?"
					text={
						<Text>
							저는 <HighlightedText>Tactical</HighlightedText>한
							개발자 입니다. 제품과 담당한 제품의 본질과 기획과
							제품의{" "}
							<HighlightedText>User Interaction</HighlightedText>{" "}
							에 대하여 심도있는 이해를 최우선으로 합니다.&nbsp;
							그리고 편안한{" "}
							<HighlightedText>User Experience</HighlightedText>를
							제공하기 위해, 기능의 최적화를 위하여 끊임없이
							연구합니다.
						</Text>
					}
				/>
				<IntroBox
					idx={2}
					subtitle="Q: 당신은 어떤 개발자 인가요?"
					text={
						<Text>
							저는 <HighlightedText>Tactical</HighlightedText>한
							개발자 입니다. 제품과 담당한 제품의 본질과 기획과
							제품의{" "}
							<HighlightedText>User Interaction</HighlightedText>{" "}
							에 대하여 심도있는 이해를 최우선으로 합니다.&nbsp;
							그리고 편안한{" "}
							<HighlightedText>User Experience</HighlightedText>를
							제공하기 위해, 기능의 최적화를 위하여 끊임없이
							연구합니다.
						</Text>
					}
				/>
				<IntroBox
					idx={3}
					subtitle="Q: 당신은 어떤 개발자 인가요?"
					text={
						<Text>
							저는 <HighlightedText>Tactical</HighlightedText>한
							개발자 입니다. 제품과 담당한 제품의 본질과 기획과
							제품의{" "}
							<HighlightedText>User Interaction</HighlightedText>{" "}
							에 대하여 심도있는 이해를 최우선으로 합니다.&nbsp;
							그리고 편안한{" "}
							<HighlightedText>User Experience</HighlightedText>를
							제공하기 위해, 기능의 최적화를 위하여 끊임없이
							연구합니다.
						</Text>
					}
				/>
			</TextFlexBox>
		</IntroInnerLayout>
	);
});

export default Intro;
