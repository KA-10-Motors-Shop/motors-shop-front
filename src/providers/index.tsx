import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/themes";
import { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
