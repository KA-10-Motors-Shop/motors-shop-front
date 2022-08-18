import { createContext, useContext, useState } from "react";

interface TokenInterface {
  token?: any;
  setToken?: any;
  children?: any;
}

const TokenContext = createContext<TokenInterface | null>(null);

export const TokenProvider = ({ children }: TokenInterface) => {
  const [token, setToken] = useState(
    window.localStorage.getItem("@motors-shop:token") || false
  );

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const UseTokenProvider = () => useContext(TokenContext);
