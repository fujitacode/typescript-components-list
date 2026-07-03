import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";

const routes: Record<string, () => string> = {
	"/": HomePage,
	"/catalog": CatalogPage,
};

const render = (path: string) => {
	const app = document.querySelector<HTMLDivElement>("#app");
	if (app) {
		app.innerHTML = routes[path] ? routes[path]() : HomePage();
	}
};

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
	render(window.location.pathname);
}

// 初期表示
render("/");
