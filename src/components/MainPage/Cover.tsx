import { type FC } from "react";

import { Box, Flex, Text } from "@radix-ui/themes";

import {
	BeforIntroAnimation,
	BeforIntroText,
	GreetingText,
	GreetingTextAnimation,
	HighlightTextAnimation,
	MainPageLayout,
} from "@components/Common.style";

export const SubText = () => {
	return (
		<Box>
			<Text
				style={{
					fontSize: "22.5px",
					fontWeight: "600",
					color: "#fff",
					animationName: `${GreetingTextAnimation}`,
					animationDelay: "1.75s",
					animationDuration: "1.5s",
					animationFillMode: "both",
				}}
			>
				4년동안 Front End 개발자로서 업무를 수행하며,
				<br />
				최적의 User Experience 를 제공하는
				<br /> 안정적이고 최적화된 Front End Application을
				<br />
				만들어 왔습니다.
			</Text>
		</Box>
	);
};

const BeforIntro = () => {
	const hello = "안녕하세요";
	return (
		<Flex
			direction={"column"}
			gap={"15.5px"}
			style={{ width: "inherit", marginTop: "15.5px" }}
		>
			<Box>
				{hello.split("").map((c, delay) => (
					<Text
						key={`${delay}_${c}`}
						style={{
							fontSize: "28.8px",
							fontWeight: "500",
							color: "rgb(100, 255, 218)",
							animationName: `${BeforIntroAnimation}`,
							animationDelay:
								delay < 10 ? `0.${delay}s` : `${delay / 10}s`,
							animationDuration: "1s",
							animationFillMode: "both",
						}}
					>
						{c}
					</Text>
				))}
			</Box>

			<Box
				style={{
					width: "inherit",
				}}
			>
				<BeforIntroText
					css={{
						display: "inline-block",
						animationName: `${HighlightTextAnimation}`,
						animationDelay: `${hello.length < 10 ? hello.length / 10 : hello.length}s`,
						animationDuration: "1.5s",
						animationFillMode: "both",
					}}
					as={"span"}
				>
					창의성
				</BeforIntroText>
				<BeforIntroText as={"span"}>&nbsp;과&nbsp;</BeforIntroText>
				<BeforIntroText
					as={"span"}
					css={{
						display: "inline-block",
						animationName: `${HighlightTextAnimation}`,
						animationDelay: `${hello.length < 10 ? hello.length / 10 : hello.length}s`,
						animationDuration: "1.5s",
						animationFillMode: "both",
					}}
				>
					정교함
				</BeforIntroText>
				<BeforIntroText as={"span"}>을 겸비한</BeforIntroText>
			</Box>
		</Flex>
	);
};

const Greeting = () => {
	return (
		<Box
			style={{
				width: "inherit",
				animationName: `${GreetingTextAnimation}`,
				animationDelay: "1.3s",
				animationDuration: "1.5s",
				animationFillMode: "both",
			}}
		>
			<GreetingText as={"span"}>Front End 개발자 </GreetingText>
			<GreetingText
				css={{
					color: "rgb(100, 255, 218)",
				}}
			>
				김우석 입니다
			</GreetingText>
		</Box>
	);
};

const TextBox = () => {
	return (
		<Flex
			direction={"column"}
			style={{
				width: "1280px",
				height: "fit-content",
				margin: "0px auto",
				padding: "0px 25.5px",
				boxSizing: "border-box",
			}}
		>
			<Box style={{ marginTop: "155px" }}>
				<BeforIntro />
				<Greeting />
				<SubText />
			</Box>
		</Flex>
	);
};

const Cover = () => {
	return (
		<MainPageLayout
			css={{
				background:
					"radial-gradient(circle, #3A86FF 0%, #0A192F 70%), url(/src/assets/img/image.png)",
				backgroundPosition: "center",
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
		>
			<TextBox />
		</MainPageLayout>
	);
};

export default Cover;
