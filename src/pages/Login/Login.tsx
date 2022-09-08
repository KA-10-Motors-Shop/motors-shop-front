import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import { UseTokenProvider } from "../../providers/token";
import api from "../../services/api";
import { Container } from "./styles";

export const Login = () => {
	const { setToken, token }: any = UseTokenProvider();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	const history = useHistory();

	const onSubmit = (data: any) => {
		console.log(data);
		api.post("/users/login", data)
			.then((response) => {
				window.localStorage.setItem(
					"@motors-shop:token",
					response.data.token,
				);
				setToken(response.data.token);
				history.push("/");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		if (token) {
			history.push("/");
		}
	});

	return (
		<Container>
			<h1>Login</h1>
		</Container>
	);
};
