import {
	Children,
	Dispatch,
	type FC,
	type MouseEvent,
	type ReactNode,
	SetStateAction,
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Box } from "@radix-ui/themes";

import {
	computeSlideData,
	dragEventHandler,
	getAccumWidth,
	handleClickLi,
	setIndexCB,
	throttleFn,
} from "@utils/Common";

import {
	ArrowButton,
	SliderBox,
	SliderComponent,
	SliderDotBox,
	SliderItemBox,
} from "@components/Common.style";

type SliderProps = {
	children: ReactNode;
};

type SliderItemProps = {
	children: ReactNode;
};

const Context = createContext<{
	index: number;
	setIndex?: Dispatch<SetStateAction<number>>;
}>({ index: 0 });

const SliderDots: FC<{
	total: number;
	slideByIdx?: (index: number) => void;
}> = ({ total, slideByIdx }) => {
	const { index } = useContext(Context);
	const ref = useRef<HTMLDivElement>(null);
	const [slideData, setSlideData] = useState<{
		liWidth: number;
		middle: number;
	}>({ liWidth: 0, middle: 0 });
	useEffect(() => {
		if (ref.current) {
			setSlideData(computeSlideData({ elem: ref.current }));
		}
	}, []);
	const handleClick = (idx: number) => {
		if (ref.current && slideByIdx) {
			handleClickLi({
				elem: ref.current,
				slideData,
				slideByIdx,
				index: idx,
			});
		}
	};
	return (
		<SliderDotBox>
			<Box ref={ref} asChild className="dots">
				<ul>
					{Array.from({ length: total }).map((_, idx) => (
						<li
							onClick={() => {
								handleClick(idx);
							}}
							key={idx}
							className={index === idx ? "now" : ""}
						></li>
					))}
				</ul>
			</Box>
		</SliderDotBox>
	);
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
			return dragEventHandler({
				elem: ref.current,
				widths,
				setIndex,
			});
		}
	}, [ref.current, widths]);

	return (
		<Context.Provider value={{ index, setIndex }}>
			<SliderBox>
				<ArrowButton
					onClick={(evt: React.MouseEvent) => {
						throttleRef.current &&
							throttleRef.current({
								_evt: evt,
								direction: "left",
							});
					}}
					disabled={index <= 0}
					className={index <= 0 ? "disabled" : ""}
				>
					<ArrowLeftIcon className="icon" />
				</ArrowButton>
				<SliderComponent
					ref={ref}
					onScroll={dragEventCB?.handleScrollSlide}
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
							throttleRef.current({
								_evt: evt,
								direction: "right",
							});
					}}
					disabled={index >= slideItems.length - 1}
					className={index >= slideItems.length - 1 ? "disabled" : ""}
				>
					<ArrowRightIcon className="icon" />
				</ArrowButton>
				<SliderDots
					total={slideItems.length}
					slideByIdx={dragEventCB?.slideByIdx}
				/>
			</SliderBox>
		</Context.Provider>
	);
};

export default Slider;
