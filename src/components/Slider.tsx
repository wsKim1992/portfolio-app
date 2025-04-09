import {
	Children,
	type FC,
	type MouseEvent,
	type ReactNode,
	type UIEvent,
	forwardRef,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import {
	debounceFn,
	dragEventHandler,
	getAccumWidth,
	getParentLeft,
	handleScrollSlide,
	setIndexCB,
	throttleFn,
} from "@utils/Common";

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

const SliderItem = forwardRef<HTMLDivElement, SliderItemProps>(
	({ children }, ref) => {
		return <SliderItemBox ref={ref}>{children}</SliderItemBox>;
	}
);

const Slider: FC<SliderProps> = ({ children }) => {
	const [index, setIndex] = useState<number>(0);
	const [widths, setWidths] = useState<
		{ accumWidth: number; width: number }[]
	>([]);
	//const [isTabbed, setIsTabbed] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const childrenRef = useRef<Array<HTMLElement | null>>([]);
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
			//arrow 버튼 클릭 시 발생하는 이벤트 함수 정의
			const { throttle, cancel: cancelThrottle } = throttleFn<{
				_evt: MouseEvent;
				direction: "left" | "right";
			}>({
				cb: (data: {
					_evt: MouseEvent;
					direction: "left" | "right";
				}) => {
					setIndexCB({
						_evt: data._evt,
						direction: data.direction,
						setIndex,
						maxLength: slideItems.length - 1,
						parentElem: ref.current,
					});
				},
				delay: 300,
			});
			throttleRef.current = throttle;
			// 각 child component 들의 width 와 누적된 width 데이터
			// slider 을 drag 하는 이벤트를 구현하기 위해 필요한 데이터
			const widths = getAccumWidth({ elems: childrenRef.current });
			setWidths(widths);
			// slider 요소의 left 값 :drag 하는 이벤트를 구현하기 위해 필요한 데이터
			return () => {
				cancelThrottle();
				throttleRef.current = null;
			};
		}
	}, []);

	const dragEventCB = useMemo(() => {
		if (ref.current && widths) {
			const { onMouseDown, onMouseMove, onMouseLeave, onMouseUp } =
				dragEventHandler({
					elem: ref.current,
					widths,
					setIndex,
				});
			return {
				onMouseDown,
				onMouseMove,
				onMouseLeave,
				onMouseUp,
			};
		}
	}, [ref.current, widths]);

	const handleScroll = useMemo(() => {
		if (widths && ref.current) {
			return handleScrollSlide({ elem: ref.current, setIndex, widths });
		}
		return undefined;
	}, [widths, ref.current]);

	return (
		<SliderBox>
			<ArrowButton
				onClick={(evt: React.MouseEvent) => {
					throttleRef.current &&
						throttleRef.current({ _evt: evt, direction: "left" });
				}}
				disabled={index <= 0}
				className={index <= 0 ? "disabled" : ""}
			>
				<ArrowLeftIcon className="icon" />
			</ArrowButton>
			<SliderComponent
				ref={ref}
				onScroll={handleScroll}
				onMouseDown={dragEventCB?.onMouseDown}
				onMouseMove={dragEventCB?.onMouseMove}
				onMouseUp={dragEventCB?.onMouseUp}
				onMouseLeave={dragEventCB?.onMouseLeave}
			>
				{slideItems.map((elem, idx) => (
					<SliderItem
						ref={el => {
							childrenRef.current[idx] = el;
						}}
						key={idx}
					>
						{elem}
					</SliderItem>
				))}
			</SliderComponent>
			<ArrowButton
				onClick={(evt: React.MouseEvent) => {
					throttleRef.current &&
						throttleRef.current({ _evt: evt, direction: "right" });
				}}
				disabled={index >= slideItems.length - 1}
				className={index >= slideItems.length - 1 ? "disabled" : ""}
			>
				<ArrowRightIcon className="icon" />
			</ArrowButton>
		</SliderBox>
	);
};

export default Slider;
