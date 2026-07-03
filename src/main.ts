import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";

const routes: Record<string, () => string> = {
	"/": HomePage,
	"/catalog": CatalogPage,
};

const render = (path: string) => {
	const app = document.querySelector<HTMLDivElement>("#app");
	if (app) {
		app.innerHTML = routes[path] ? routes[path]() : routes["/"]();
	}
};

document.addEventListener("click", (e) => {
	const target = (e.target as HTMLElement).closest("[data-link]");
	if (target) {
		e.preventDefault();
		const path = target.getAttribute("data-link");
		if (path && routes[path]) {
			window.history.pushState({}, "", path);
			render(path);
		}
	}
});

window.addEventListener("popstate", () => {
	render(window.location.pathname);
});

render(window.location.pathname);
