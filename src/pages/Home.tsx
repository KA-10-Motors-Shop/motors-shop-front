import {
	AlertButton,
	BrandButton,
	BrandOpacityButton,
	LinkButton,
	OutlineBrandButton,
	Outline2Button,
	OutlineLightButton,
	SuccessButton,
	DefaultButton,
	LightButton,
	Outline1Button,
	NegativeButton,
	OutlineBrand1Button,
} from "../components/Button/Button";

export const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<DefaultButton>Default</DefaultButton>
			<BrandButton disabled>Brand</BrandButton>
			<BrandOpacityButton disabled>Opacity</BrandOpacityButton>
			<OutlineBrand1Button>Out Brand 1</OutlineBrand1Button>
			<OutlineLightButton disabled>Outline Light</OutlineLightButton>
			<Outline1Button disabled>Outline1</Outline1Button>
			<Outline2Button disabled>Outline2</Outline2Button>
			<SuccessButton disabled>Sucesso</SuccessButton>
			<AlertButton disabled>Alerta</AlertButton>
			<LinkButton disabled>Link</LinkButton>
			<OutlineBrandButton disabled>Outline Brand</OutlineBrandButton>
			<LightButton>Light</LightButton>
			<NegativeButton>Negative</NegativeButton>
		</>
	);
};
