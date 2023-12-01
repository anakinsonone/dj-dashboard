import { TextInput, Button, Group, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const SignInForm = ({ setIsLoggedIn, setUserid }) => {
	const form = useForm({
		initialValues: {
			username: "",
			password: "",
		},

		validate: {
			username: (value) =>
				/^\S+@\S+$/.test(value) || value === undefined || value === null
					? null
					: "Invalid username",
			password: (value) =>
				value === undefined || value === null || value?.length === 0
					? "Invalid password"
					: null,
		},
	});

	const saveUserData = (data) => {
		setIsLoggedIn(true);
		setUserid(data.data.id);
	};

	const handleSignIn = (values) => {
		const { hasErrors } = form.validate();
		if (hasErrors) return;
		const { username, password } = values;
		const body = { username, password };

		fetch("https://stg.dhunjam.in/account/admin/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((data) =>
				data.status === 200
					? saveUserData(data)
					: console.log("error", data)
			);
	};

	return (
		<>
			<h1>Venue Admin Login</h1>
			<form onSubmit={form.onSubmit((values) => handleSignIn(values))}>
				<TextInput
					withAsterisk
					label="Email"
					placeholder="your@email.com"
					{...form.getInputProps("username")}
				/>
				<PasswordInput
					withAsterisk
					label="Password"
					placeholder="Password"
					{...form.getInputProps("password")}
				/>

				<Group mt="md">
					<Button fullWidth type="submit">
						Submit
					</Button>
				</Group>
			</form>
		</>
	);
};

export default SignInForm;
