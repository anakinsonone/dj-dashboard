import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider, createTheme } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
	primaryColor: "violet",
	fontFamily: "Poppins, sans-serif"
});

root.render(
	<React.StrictMode>
		<MantineProvider defaultColorScheme="dark" theme={theme}>
			<App />
		</MantineProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
