import { type FC } from "react";

import { HashTagContainer } from "@components/Common.style";

type HashTagsProps = {
	text: string;
	positionObj?: {
		top: string;
		left: string;
	};
	animationDelay?: string;
};

const HashTags: FC<HashTagsProps> = ({
	text,
	positionObj = { top: "calc(50% +30px)", left: "calc(50% +30px)" },
	animationDelay = "200ms",
}) => {
	return (
		<HashTagContainer
			css={{
				top: positionObj.top,
				left: positionObj.left,
				animationDelay,
			}}
		>
			{text}
		</HashTagContainer>
	);
};

export default HashTags;
