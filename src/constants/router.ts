import { createBrowserRouter } from "react-router-dom";

import OpeningPage from "@pages/openingPage";

export const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				Component: OpeningPage,
			},
		],
	},
]);
