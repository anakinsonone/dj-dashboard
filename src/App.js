import { Stack } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";
import SignInForm from "./components/SignInForm";
import Dashboard from "./components/Dashboard";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userid, setUserid] = useState(null);

	return isLoggedIn ? (
		<Stack maw={"75vw"} mah={"95vh"} w={"100%"} h={"100%"}>
			<Dashboard userid={userid} />
		</Stack>
	) : (
		<Stack maw={"75vw"} mah={"95vh"} w={"100%"} h={"100%"}>
			<SignInForm
				setIsLoggedIn={setIsLoggedIn}
				setUserid={setUserid}
			/>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<a href="/">New Registration?</a>
			</div>
		</Stack>
	);
}
