import {
	Radio,
	Group,
	SegmentedControl,
	NumberInput,
	Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";

const RequestForm = ({
	segmentValues,
	chargeCustomers,
	customRequestAmount,
	setCustomRequestAmount,
}) => {
	const getFormValues = () => {
		return {
			shouldCharge: chargeCustomers ? "yes" : "no",
			customAmount: customRequestAmount,
			segment: segmentValues,
		};
	};

	useEffect(() => {
		getFormValues();
	}, [chargeCustomers, customRequestAmount, segmentValues]);

	const form = useForm({
		initialValues: getFormValues,

		validate: {
			amount: (value) =>
				value >= 0 || value === undefined || value === null
					? "Amount should be greater than 0."
					: null,
		},
	});

	return (
		<form>
			<Grid>
				<Grid.Col span={6}>
					<label htmlFor="shouldChargeCustomers">
						Do you want to charge your customers for requesting songs?
					</label>
				</Grid.Col>
				<Grid.Col span={6}>
					<Group>
						<Radio.Group
							{...form.getInputProps("shouldCharge")}
							name="shouldChargeCustomers"
							withAsterisk
						>
							<Group mt="xs">
								<Radio value="yes" label="Yes" />
								<Radio value="no" label="No" />
							</Group>
						</Radio.Group>
					</Group>
				</Grid.Col>
			</Grid>
			<br />
			<Grid>
				<Grid.Col span={6}>
					<label htmlFor="customAmount">Custom song request amount</label>
				</Grid.Col>
				<Grid.Col span={6}>
					<NumberInput
						name="customAmount"
						placeholder="Enter any amount"
						disabled={form.values.shouldCharge === "no"}
						value={customRequestAmount}
						onChange={(value) => setCustomRequestAmount(value)}
						withAsterisk
					/>
				</Grid.Col>
			</Grid>
			<br />
			<Grid>
				<Grid.Col span={6}>
					<label htmlFor="segment">
						Regular song request amounts, from high to low
					</label>
				</Grid.Col>
				<Grid.Col span={6}>
					<SegmentedControl
						name="segment"
						disabled={form.values.shouldCharge === "no"}
						data={segmentValues}
						fullWidth
						{...form.getInputProps("segment")}
					/>
				</Grid.Col>
			</Grid>
		</form>
	);
};

export default RequestForm;
