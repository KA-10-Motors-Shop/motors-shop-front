import { Container } from "./styles";

interface textareaInterface {
	label: string;
	placeholder?: string;
	error?: any;
	children?: any;
	defaultValue?: any;
	value?: any;
}

export const Textarea = ({
	label,
	error,
	placeholder,
	defaultValue,
	value,
	children,
	...rest
}: textareaInterface) => {
	return (
		<Container>
			<div>
				{label} {!!error && <span> - {error}</span>}
			</div>
			<form>
				<textarea
					defaultValue={defaultValue}
					value={value}
					rows={5}
					cols={25}
					wrap="true"
					autoCapitalize="sentences"
					placeholder={placeholder}
					{...rest}
				/>
			</form>
		</Container>
	);
};
