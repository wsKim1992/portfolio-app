import { memo, useEffect, useRef } from "react";

import { useShallow } from "zustand/shallow";

import { useCommonStore } from "@stores/CommonStore";

import { Title } from "@components/Common.style";
import Comments from "@components/Intro/Comments";
import { IntroInnerLayout, TextFlexBox } from "@components/Intro/Common.styls";

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
				<Comments />
			</TextFlexBox>
		</IntroInnerLayout>
	);
});

export default Intro;
