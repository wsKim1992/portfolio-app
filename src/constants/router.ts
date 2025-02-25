import { createBrowserRouter } from "react-router-dom";

import OpeningPage from "@pages/openingPage";

export const router = createBrowserRouter([
	{
		path: "opening",
		children: [
			{
				index: true,
				Component: OpeningPage,
			},
		],
	},
]);
