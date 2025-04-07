import {
	Children,
	type FC,
	type MouseEvent,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { setIndexCB, slideByIndex, throttleFn } from "@utils/Common";

import {
	ArrowButton,
	SliderBox,
	SliderComponent,
	SliderItemBox,
} from "@components/Common.style";

type SliderProps = {
	children: ReactNode;
};

type SliderItemProps = {
	children: ReactNode;
};

const SliderItem: FC<SliderItemProps> = ({ children }) => {
	return <SliderItemBox>{children}</SliderItemBox>;
};

const Slider: FC<SliderProps> = ({ children }) => {
	const [index, setIndex] = useState<number>(0);
	const ref = useRef<HTMLDivElement | null>(null);
	const slideItems = Children.toArray(children);
	const throttleRef =
		useRef<
			(data: {
				_evt: MouseEvent;
				direction: "left" | "right";
			}) => void | null
		>(null);

	useEffect(() => {
		if (ref.current) {
			slideByIndex({ parentElem: ref.current, index });
		}
	}, [index]);

	useEffect(() => {
		const { throttle, cancel: cancelThrottle } = throttleFn<{
			_evt: MouseEvent;
			direction: "left" | "right";
		}>({
			cb: (data: { _evt: MouseEvent; direction: "left" | "right" }) => {
				setIndexCB({
					_evt: data._evt,
					direction: data.direction,
					setIndex,
					maxLength: slideItems.length - 1,
				});
			},
			delay: 300,
		});
		throttleRef.current = throttle;
		return () => {
			cancelThrottle();
			throttleRef.current = null;
		};
	}, []);

	return (
		<SliderBox>
			<ArrowButton
				onClick={(evt: React.MouseEvent) => {
					throttleRef.current &&
						throttleRef.current({ _evt: evt, direction: "left" });
				}}
				disabled={index <= 0}
			>
				<ArrowLeftIcon className="icon" />
			</ArrowButton>
			<SliderComponent ref={ref}>
				{slideItems.map((elem, idx) => (
					<SliderItem key={idx}>{elem}</SliderItem>
				))}
			</SliderComponent>
			<ArrowButton
				onClick={(evt: React.MouseEvent) => {
					throttleRef.current &&
						throttleRef.current({ _evt: evt, direction: "right" });
				}}
				disabled={index >= slideItems.length - 1}
			>
				<ArrowRightIcon className="icon" />
			</ArrowButton>
		</SliderBox>
	);
};

export default Slider;
