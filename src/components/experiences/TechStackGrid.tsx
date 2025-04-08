import {
	Dispatch,
	type FC,
	type MouseEvent as ReactMouseEvent,
	SetStateAction,
	createContext,
	forwardRef,
	useCallback,
	useRef,
	useState,
} from "react";

import { Box } from "@radix-ui/themes";

import { handleMouseEnter } from "@utils/Experiences";

import { dummyTechStacks } from "@constants/experiences";

import { type TTechStackEnum } from "@typings/Experiences";

import {
	HoverDescription,
	ModalTabContent,
	TechStackBox,
} from "@components/experiences/Common.style";
import TechStack from "@components/experiences/TechStack";

type TechStackGridPropps = {
	value: TTechStackEnum;
};

const DescriptionComp = forwardRef<
	HTMLDivElement,
	{ name: string; description: string }
>(({ name, description }, ref) => {
	return (
		<HoverDescription ref={ref}>
			<Box className="title">{name}</Box>
			<Box className="description">{description}</Box>
		</HoverDescription>
	);
});

export const Context = createContext<{
	info?: { name: string; description: string } | null;
	setInfo?: Dispatch<
		SetStateAction<{ name: string; description: string } | null>
	>;
}>({ info: undefined });

const TechStackGrid: FC<TechStackGridPropps> = ({ value }) => {
	const [info, setInfo] = useState<{
		name: string;
		description: string;
	} | null>(null);
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const ref = useRef<HTMLDivElement | null>(null);
	const onMouseMove = useCallback(
		(evt: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
			if (info && ref.current) {
				handleMouseEnter({ elem: ref.current })(evt);
			}
		},
		[info]
	);
	const onMouseEnter = useCallback(
		(evt: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
			if (info) {
				handleMouseEnter({ elem: ref.current })(evt);
			}
		},
		[info]
	);

	return (
		<Context.Provider
			value={{
				info,
				setInfo,
			}}
		>
			<ModalTabContent
				ref={wrapperRef}
				css={{ position: "relative" }}
				value={value}
				onMouseOverCapture={onMouseEnter}
				onMouseMove={onMouseMove}
			>
				{info && <DescriptionComp ref={ref} {...info} />}
				<TechStackBox>
					{dummyTechStacks.map((elem, idx) => (
						<TechStack
							key={`${idx}_${elem.name}`}
							value={value}
							{...elem}
						/>
					))}
				</TechStackBox>
			</ModalTabContent>
		</Context.Provider>
	);
};

export default TechStackGrid;
