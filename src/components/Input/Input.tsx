import { Container } from "./styles";

interface inputInterface {
	label: string;
	placeholder: string;
	error?: any;
}

export const Input = ({
	label,
	error,
	placeholder,
	...rest
}: inputInterface) => {
	return (
		<Container>
			<div>
				{label} {!!error && <span> - {error}</span>}
			</div>
			<input {...rest} />
		</Container>
	);
};
