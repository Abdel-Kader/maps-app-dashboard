import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import App from "./App";
import { About } from "./pages/About";
import { Projet } from "./pages/projets";
import Add from "./pages/users/add";
import { Users } from "./pages/users";
import MapContainer from "./pages/maps";

export const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/" element={<About />} />
			<Route path="/projets" element={<Projet />} />

			<Route path="/users" element={<Users />} />
			<Route path="/users/add" element={<Add />} />
			<Route path="/maps" element={<MapContainer />} />

			<Route
				path="*"
				element={
					<main style={{ padding: "1rem" }}>
						<p>There's nothing here!</p>
					</main>
				}
			/>
		</Routes>
	</BrowserRouter>
);
