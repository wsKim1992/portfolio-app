import { type ReactNode, forwardRef, useImperativeHandle, useRef } from "react";

import { type CSS } from "@stitches/react";

import { ScrollIntoComponent } from "@utils/MainPage";

import { type TPathObj } from "@typings/Common";

import { MainPageLayout } from "@components/Common.style";

const SubPageLayout = forwardRef<
	{ scrollWithIn: () => void },
	{
		hash: Omit<TPathObj, "main" | "opening">[keyof Omit<
			TPathObj,
			"main" | "opening"
		>];
		children: ReactNode;
		css?: CSS;
	}
>(({ hash, children, css }, ref) => {
	const divRef = useRef<HTMLDivElement>(null);
	useImperativeHandle(ref, () => ({
		scrollWithIn: () => {
			if (divRef.current) {
				ScrollIntoComponent({ hash, Elem: divRef.current });
			}
		},
	}));
	return (
		<MainPageLayout ref={divRef} css={css}>
			{children}
		</MainPageLayout>
	);
});

export default SubPageLayout;
