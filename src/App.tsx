import { RouterProvider } from "react-router-dom";

import { Box } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { router } from "@constants/router";

function App() {
	return (
		<Theme>
			<Box
				style={{
					width: "100dvw",
					height: "100dvh",
					overflow: "hidden",
				}}
			>
				<RouterProvider router={router}></RouterProvider>
			</Box>
		</Theme>
	);
}

export default App;
