import { type FC } from "react";

import { CopyIcon } from "@radix-ui/react-icons";
import { type IconProps, Text } from "@radix-ui/themes";

import { CopyToClipboard } from "@utils/MainPage";

import { LinkWrapper, URLLink } from "@components/Common.style";

type LinkComponentProps = {
	link: string;
	Icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
};

const LinkComponent: FC<LinkComponentProps> = ({ link, Icon }) => {
	return (
		<LinkWrapper>
			<Icon
				style={{
					width: "45.5px",
					height: "45.5px",
				}}
			/>
			<URLLink className="url-link">
				<CopyIcon
					onClick={() => CopyToClipboard(link)}
					style={{
						width: "25.5px",
						height: "25.5px",
						color: "rgb(100, 255, 218)",
					}}
				/>
				<Text
					style={{
						maxWidth: "350px",
						textOverflow: "ellipsis",
						whiteSpace: "pre",
						overflow: "hidden",
					}}
				>
					{link}
				</Text>
			</URLLink>
		</LinkWrapper>
	);
};

export default LinkComponent;
