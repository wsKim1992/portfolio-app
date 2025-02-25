import Button from "@components/Button";
import { BackgrounContainer } from "@components/Common.style";
import OpeningTitle from "@components/OpeningTitle";

const OpeningBackground = () => {
	return (
		<BackgrounContainer>
			<OpeningTitle text="Front End 개발자 \n 김우석 \n Web Page" />
			<Button
				text="Enter"
				handleClick={() => {}}
				css={{ minWidth: "150px" }}
			/>
		</BackgrounContainer>
	);
};

export default OpeningBackground;
