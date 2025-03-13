import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { HomeIcon } from "@radix-ui/react-icons";
import { Box, TabNav, Text } from "@radix-ui/themes";

import { isSubNavKey } from "@utils/Common";

import { subNavObj } from "@constants/router";

import { Navigation, TabNavElem } from "@components/Common.style";

const SubPageNavi = () => {
	const navigate = useNavigate();
	const { hash } = useLocation();
	return (
		<Navigation css={{ width: "fit-content", padding: "0px" }}>
			<TabNav.Root>
				{Object.keys(subNavObj).map((key, idx) =>
					isSubNavKey(key) ? (
						<TabNavElem
							css={{
								animationDelay: `${idx * 100}ms`,
							}}
							key={key}
							href={`${subNavObj[key].link}`}
							onClick={evt => {
								evt.preventDefault();
								evt.stopPropagation();
								if (hash === subNavObj[key].link) {
									navigate("");
									setTimeout(() => {
										navigate(subNavObj[key].link);
									}, 10);
								} else {
									navigate(subNavObj[key].link);
								}
							}}
						>
							{subNavObj[key].text}
						</TabNavElem>
					) : null
				)}
			</TabNav.Root>
		</Navigation>
	);
};

const NavigationComponent = () => {
	return (
		<Navigation>
			<Box
				asChild
				style={{
					width: "fit-content",
					height: "fit-content",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "12.5px",
				}}
			>
				<NavLink to={"/main"}>
					<HomeIcon
						style={{
							width: "25px",
							height: "25px",
							color: "#3A86FF",
						}}
					/>
					<Text
						style={{
							fontSize: "18.5px",
							fontWeight: "550",
							color: "#3A86FF",
						}}
					>
						Home
					</Text>
				</NavLink>
			</Box>
			<SubPageNavi />
		</Navigation>
	);
};

export default NavigationComponent;
