import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register";
import { Product } from "../pages/Product";
import { ProductViewUser } from "../pages/ProductViewUser";
import { ProductViewAdmin } from "../pages/ProductViewAdmin";

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/register">
				<Register />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/product/:id">
				<Product />
			</Route>
			<Route exact path="/productViewUser">
				<ProductViewUser />
			</Route>
			<Route exact path="/productViewAdmin/:id">
				<ProductViewAdmin />
			</Route>
		</Switch>
	);
};
