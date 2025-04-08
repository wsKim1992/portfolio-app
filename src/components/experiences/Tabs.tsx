import { type ReactNode } from "react";

import {
	ModalTabList,
	ModalTabRoot,
	ModalTabTrigger,
} from "@components/experiences/Common.style";

type TabsProps<T extends string> = {
	value: T;
	nameObj: { [key in T]: string };
	defaultValue: T;
	children: ReactNode;
	onValueChangeCB: (newValue: string) => void;
};

const Tabs = <T extends string>({
	value,
	nameObj,
	defaultValue,
	children,
	onValueChangeCB,
}: TabsProps<T>) => {
	return (
		<ModalTabRoot
			value={value}
			onValueChange={onValueChangeCB}
			defaultValue={defaultValue}
			css={{ height: "100%" }}
		>
			<ModalTabList>
				{Object.keys(nameObj).map(elem => (
					<ModalTabTrigger key={elem} value={elem}>
						{nameObj[elem as T]}
					</ModalTabTrigger>
				))}
			</ModalTabList>
			{children}
		</ModalTabRoot>
	);
};

export default Tabs;
