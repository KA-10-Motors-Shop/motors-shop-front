import { createContext } from "react";
import { useHistory } from "react-router";

interface SaleInterface {
	children?: any;
	cars?: any;
	motorcycles?: any;
	breadcrumbs?: any;
}

const SalesContext = createContext<SaleInterface | null>(null);

export const SalesProvider = ({ children }: SaleInterface) => {
	const history = useHistory();

	//return (
	//	<SalesContext.Provider value={{  }}>
	//		{children}
	//	</SalesContext.Provider>
	//);
};
