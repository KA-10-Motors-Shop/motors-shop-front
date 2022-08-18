import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/themes";
import { ReactNode } from "react";
import { TokenProvider } from "./token";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>
    <TokenProvider>{children}</TokenProvider>
  </ChakraProvider>
);
