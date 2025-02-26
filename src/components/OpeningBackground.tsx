import { BackgrounContainer } from "@components/Common.style";
import HashTags from "@components/HashTags";
import OpeningTitle from "@components/OpeningTitle";

const OpeningBackground = () => {
	return (
		<BackgrounContainer>
			<OpeningTitle text="Front End 개발자\n 김우석\n Web Page" />
			<HashTags
				text="# Front End"
				positionObj={{
					top: "150px",
					left: "calc(50% + 354px)",
				}}
				animationDelay={
					Math.ceil(Math.random() * 300).toFixed(0) + "ms"
				}
			/>
			<HashTags
				text="# 5년차 개발자"
				positionObj={{
					top: "410px",
					left: "calc(50% + 234px)",
				}}
				animationDelay={
					Math.ceil(Math.random() * 300).toFixed(0) + "ms"
				}
			/>
			<HashTags
				text="# React"
				positionObj={{
					top: "610px",
					left: "calc(50% + 54px)",
				}}
				animationDelay={
					Math.ceil(Math.random() * 100).toFixed(0) + "ms"
				}
			/>
			<HashTags
				text="# B2C 에서 B2B 까지"
				positionObj={{
					top: "315px",
					left: "calc(50% +174px)",
				}}
				animationDelay={
					Math.ceil(Math.random() * 100).toFixed(0) + "ms"
				}
			/>
		</BackgrounContainer>
	);
};

export default OpeningBackground;
