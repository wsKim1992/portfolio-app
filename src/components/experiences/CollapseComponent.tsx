import { type FC, type ReactNode, useState } from "react";

import { ArrowUpIcon } from "@radix-ui/react-icons";

import {
	CollapseArrowBtn,
	CollapseContent,
	CollapseRoot,
	CollapseTrigger,
	TriggerFlex,
} from "@components/experiences/Common.style";

type CollapseComponentProps = {
	TriggerBox: ReactNode;
	ContentBox: ReactNode;
};

const CollapseComponent: FC<CollapseComponentProps> = ({
	TriggerBox,
	ContentBox,
}) => {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<CollapseRoot open={open} onOpenChange={setOpen}>
			<CollapseTrigger>
				<TriggerFlex>
					{TriggerBox}
					<CollapseArrowBtn as={"p"} css={{ margin: "0px" }}>
						<ArrowUpIcon
							style={{
								width: "24.5px",
								height: "24.5px",
								color: "var(--color-base-primary)",
								transition: "transform 0.45s",
								transform: open
									? "rotateX(0deg)"
									: "rotateX(180deg)",
							}}
						></ArrowUpIcon>
					</CollapseArrowBtn>
				</TriggerFlex>
			</CollapseTrigger>
			<CollapseContent>{ContentBox}</CollapseContent>
		</CollapseRoot>
	);
};

export default CollapseComponent;
