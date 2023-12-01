import { Grid, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import Chart from "./Chart";
import RequestForm from "./RequestForm";

const Dashboard = ({ userid }) => {
	const [venue, setVenue] = useState("");
	const [chargeCustomers, setChargeCustomers] = useState(true);
	const [customRequestAmount, setCustomRequestAmount] = useState(0);
	const [segmentValues, setSegmentValues] = useState([]);

	const populateValues = ({ data }) => {
		const { amount, location, name, charge_customers } = data;

		setSegmentValues(
			Object.values(amount)
				.map((value) => `${value}`)
				.slice(1)
		);
		setVenue(`${name}, ${location} on Dhun Jam`);
		setChargeCustomers(charge_customers);
		setCustomRequestAmount(amount.category_6);
		console.log("data", data);
	};

	const updateValues = ({ data }) => {
		const { amount } = data;
		setCustomRequestAmount(amount.category_6);
	};

	const fethcDataFromAPI = () => {
		fetch(`https://stg.dhunjam.in/account/admin/${userid}`)
			.then((response) => response.json())
			.then((data) => populateValues(data));
	};

	const updatePrice = () => {
		fetch(`https://stg.dhunjam.in/account/admin/${userid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				amount: {
					category_6: customRequestAmount,
				},
			}),
		})
			.then((response) => response.json())
			.then((data) => updateValues(data));
	};

	useEffect(() => {
		fethcDataFromAPI();
	}, []);

	return (
		<>
			<h1>{venue}</h1>
			<RequestForm
				segmentValues={segmentValues}
				chargeCustomers={chargeCustomers}
				customRequestAmount={customRequestAmount}
				setCustomRequestAmount={setCustomRequestAmount}
			/>
			<br />
			<Chart />
			<Grid>
				<Grid.Col>
					<Button fullWidth onClick={updatePrice}>
						Save
					</Button>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default Dashboard;
