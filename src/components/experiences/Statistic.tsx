import { type FC, useEffect, useState } from "react";

import {
	ArrowRightIcon,
	TriangleDownIcon,
	TriangleUpIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Progress, Text } from "@radix-ui/themes";

type StatisticProps = {
	title: string;
	before: number;
	after: number;
	unit: string;
};

const Statistic: FC<StatisticProps> = ({ title, before, after, unit }) => {
	const maxValue = before >= after ? before : after;
	const [value, setValue] = useState<number>(before);

	useEffect(() => {
		setTimeout(() => {
			setValue(after);
		}, 500);
	}, []);

	return (
		<Flex
			direction={"column"}
			style={{
				width: "100%",
				height: "fit-content",
				gap: "4.5px",
				padding: "5.5px",
				boxSizing: "border-box",
			}}
		>
			<Text
				style={{
					flex: "1",
					flexShrink: "0",
					fontSize: "1.35rem",
					fontWeight: "500",
				}}
			>
				{title}
			</Text>
			<Flex direction={"column"} style={{ width: "100%" }} gap={"6.5px"}>
				<Flex
					direction={"row"}
					style={{ width: "100%" }}
					align="center"
					justify={"between"}
				>
					<Flex
						direction={"row"}
						gap={"5.5px"}
						style={{ width: "fit-content" }}
					>
						<Text
							style={{ fontSize: "1.25rem", fontWeight: "500" }}
						>
							{before} {unit}
						</Text>
						<ArrowRightIcon
							style={{
								width: "14.5px",
								height: "14.5px",
								fontWeight: "500",
							}}
						/>
						<Text
							style={{ fontSize: "1.25rem", fontWeight: "500" }}
						>
							{after} {unit}
						</Text>
					</Flex>
					<Flex direction={"row"} align={"center"} gap={"2.5px"}>
						{after - before >= 0 ? (
							<TriangleUpIcon
								style={{
									width: "30px",
									height: "30px",
									color: "red",
								}}
							/>
						) : (
							<TriangleDownIcon
								style={{
									width: "30px",
									height: "30px",
									color: "blue",
								}}
							/>
						)}
						<Text>
							{Math.abs(after - before).toFixed(2)} {unit}
						</Text>
					</Flex>
				</Flex>
				<Progress
					style={{
						height: "12.5px",
						transition: "transform 0.65s",
					}}
					max={maxValue}
					value={value}
				></Progress>
			</Flex>
		</Flex>
	);
};

export default Statistic;
