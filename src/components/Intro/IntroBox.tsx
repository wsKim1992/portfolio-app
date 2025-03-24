import {
	type FC,
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import { Text } from "@radix-ui/themes";

import { rotateInOrder } from "@utils/Intro";

import { Title } from "@components/Common.style";
import {
	Highlighted,
	IntroBoxElem,
	IntroTextBox,
} from "@components/Intro/Common.styls";

type TIntroBoxContext = {
	isHovered: boolean;
};

const IntroBoxContext = createContext<TIntroBoxContext>({
	isHovered: false,
});

export const HighlightedText: FC<{ children: ReactNode }> = ({ children }) => {
	const { isHovered } = useContext<TIntroBoxContext>(IntroBoxContext);
	const ref = useRef<HTMLElement | null>(null);
	useEffect(() => {
		if (ref.current && isHovered) {
			rotateInOrder(ref.current);
		}
	}, [isHovered]);
	return (
		<Highlighted ref={ref}>
			{typeof children === "string"
				? children.split("").map((c, idx) => (
						<Text
							as={"span"}
							className="highlighted-char"
							key={`${c}_${idx}`}
							style={{
								display: "inline-block",
								fontSize: "inherit",
								fontWeight: "500",
								color: isHovered
									? "rgb(58, 134, 255)"
									: "inherit",
								transition: "transform 0.43s ease-out",
								transform: isHovered
									? "rotateX(360deg)"
									: "rotateX(0deg)",
							}}
						>
							{c}
						</Text>
					))
				: children}
		</Highlighted>
	);
};

const IntroBox: FC<{ subtitle: string; text: ReactNode }> = ({
	subtitle,
	text,
}) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	return (
		<IntroBoxElem
			onMouseOver={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			className="intro-box"
			css={{
				transition: "transform 0.65s linear, background 0.23s ease-in",
				transform: "translate3d(0, 0, 0) scale(0.0, 0.0)",
			}}
		>
			<Title
				as="h3"
				css={{
					color: "inherit",
					fontSize: "1.5rem",
					fontWeight: "600",
				}}
			>
				{subtitle}
			</Title>
			<IntroBoxContext.Provider value={{ isHovered }}>
				<IntroTextBox as="article">{text}</IntroTextBox>
			</IntroBoxContext.Provider>
		</IntroBoxElem>
	);
};

export default IntroBox;
