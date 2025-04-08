import { type FC, memo, useContext } from "react";

import { type TTechStackElem, TTechStackEnum } from "@typings/Experiences";

import { TechStackIconBox } from "@components/experiences/Common.style";
import { Context } from "@components/experiences/TechStackGrid";

type TechStckProps = TTechStackElem & { value: TTechStackEnum };

const TechStack: FC<TechStckProps> = memo(
	({ value, name, type, src, description }) => {
		const { setInfo } = useContext(Context);
		return (
			<TechStackIconBox
				onMouseOver={
					value !== "all" && value !== type
						? undefined
						: () => {
								setInfo && setInfo({ name, description });
							}
				}
				onMouseLeave={
					value !== "all" && value !== type
						? undefined
						: () => {
								setInfo && setInfo(null);
							}
				}
				className={value !== "all" && value !== type ? "disable" : ""}
			>
				<img className={"src-img"} src={src} alt="tech-stack-icon" />
			</TechStackIconBox>
		);
	}
);

export default TechStack;
