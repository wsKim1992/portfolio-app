import { useState } from "react";

import { Text } from "@radix-ui/themes";

import { handleTabValueChange } from "@utils/Experiences";

import { techStackName } from "@constants/experiences";

import { TTechStackEnum } from "@typings/Experiences";

import { ModalDescription } from "@components/experiences/Common.style";
import DialogContent from "@components/experiences/DialogContent";
import Tabs from "@components/experiences/Tabs";
import TechStackGrid from "@components/experiences/TechStackGrid";

const TechStacks = () => {
	const [value, setValue] = useState<TTechStackEnum>("all");
	return (
		<DialogContent
			HeaderComp={<Text className="project-title">Tech Stacks</Text>}
		>
			<ModalDescription as={"div"}>
				<Tabs
					value={value}
					onValueChangeCB={handleTabValueChange({
						setState: setValue,
					})}
					nameObj={techStackName}
					defaultValue={value}
				>
					<TechStackGrid value={value} />
				</Tabs>
			</ModalDescription>
		</DialogContent>
	);
};

export default TechStacks;
