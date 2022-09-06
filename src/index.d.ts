import react from "react";

declare module "react" {
	interface HTMLAtrributes<T> extends DOMAttributes<T>, AriaAttributes {
		isVisible?: boolean;
	}
}
