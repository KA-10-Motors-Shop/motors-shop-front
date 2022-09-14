import { ReactNode } from "react";
import { TokenProvider } from "./token";

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
	<TokenProvider>{children}</TokenProvider>
);
