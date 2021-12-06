import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { getAll } from "../../services/projets";
const icon = L.icon({
	iconUrl:
		"https://cdn4.iconfinder.com/data/icons/basic-ui-pack-flat-s94-1/64/Basic_UI_Icon_Pack_-_Flat_map_pointer-512.png",
	iconSize: [40, 40],
	iconAnchor: [12.5, 41],
	popupAnchor: [0, -41],
});

const MapPage = () => {
	const position = [13.51547, 2.166885];
	const [projets, setProjets] = useState(null);
	const [input, setInput] = useState("");
	const [type, setType] = useState(null);
	const [showNom, isShowNom] = useState(false);
	const [showNum, isShowNum] = useState(false);
	const [showType, isShowType] = useState(false);

	useEffect(() => {
		getAll().then((res) => {
			console.log(res);
			setProjets(res);
		});
	}, []);

	const search = () => {
		if (type == "num") {
			setProjets(projets.find((element) => element.numeroProjet == input));
			setInput("");
			//console.log(projets);
		}
		if (type == "nom") {
			setProjets(projets.find((element) => element.nomProjet == input));
			setInput("");
		}
		if (type == "type") {
			setProjets(projets.find((element) => element.typeProjet == input));
			setInput("");
		}
	};
	if (projets != null) {
		console.log(projets.length);
		console.log(projets);
	} else console.log("projet null");
	return (
		<Layout>
			<div className="w-full sm:px-6 md:pl-56">
				<h3 style={{ fontSize: 19 }}>Filtrez par :</h3>
				<div style={{ display: "flex", margin: 40 }}>
					<div
						style={{
							flexDirection: "row",
							backgroundColor: "#2c9948",
							borderRadius: 15,
							padding: 8,
							marginLeft: 15,
							paddingHorizontal: 20,
							marginHorizontal: 10,
							shadowColor: "#ccc",
							shadowOffset: { width: 0, height: 3 },
							shadowOpacity: 0.5,
							shadowRadius: 5,
							elevation: 10,
							cursor: "pointer",
						}}
						onClick={() => isShowNum(true)}
					>
						Numéro du projet
						{showNum && (
							<div>
								<input
									name="num"
									type="text"
									value={input}
									placeholder="Rechercher par numéro"
									className="mt-2 h-8 rounded border-2 mb-8 px-4"
									onChange={(text) => {
										setInput(text.target.value);
										setType(text.target.name);
									}}
								/>
								<button className="bg-green-500 p-1 ml-1" onClick={search}>
									Valider
								</button>
							</div>
						)}
					</div>
					<div
						style={{
							flexDirection: "row",
							backgroundColor: "#2c9948",
							borderRadius: 15,
							padding: 8,
							marginLeft: 15,
							paddingHorizontal: 20,
							marginHorizontal: 10,
							shadowColor: "#ccc",
							shadowOffset: { width: 0, height: 3 },
							shadowOpacity: 0.5,
							shadowRadius: 5,
							elevation: 10,
							cursor: "pointer",
						}}
						onClick={() => isShowNom(true)}
					>
						Nom de projet
						{showNom && (
							<div>
								<input
									name="nom"
									value={input}
									type="text"
									placeholder="Rechercher par nom"
									className="mt-2 h-8 rounded border-2 mb-8 px-4"
									onChange={(text) => {
										setInput(text.target.value);
										setType(text.target.name);
									}}
								/>
								<button className="bg-green-500 p-1 ml-1" onClick={search}>
									Valider
								</button>
							</div>
						)}
					</div>
					<div
						style={{
							flexDirection: "row",
							backgroundColor: "#2c9948",
							borderRadius: 15,
							padding: 8,
							marginLeft: 15,
							paddingHorizontal: 20,
							marginHorizontal: 10,
							shadowColor: "#ccc",
							shadowOffset: { width: 0, height: 3 },
							shadowOpacity: 0.5,
							shadowRadius: 5,
							elevation: 10,
							cursor: "pointer",
						}}
						onClick={() => isShowType(true)}
					>
						Type de projet
						{showType && (
							<div>
								<input
									name="type"
									type="text"
									value={input}
									placeholder="Rechercher par type"
									className="mt-2 h-8 rounded border-2 mb-8 px-4"
									onChange={(text) => {
										setInput(text.target.value);
										setType(text.target.name);
									}}
								/>
								<button className="bg-green-500 p-1 ml-1" onClick={search}>
									Valider
								</button>
							</div>
						)}
					</div>
				</div>
				<MapContainer
					center={position}
					zoom={13}
					scrollWheelZoom={false}
					style={{ height: "87vh", zIndex: 1 }}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{projets && projets.length > 0
						? projets.map((projet) => (
								<Marker
									position={[projet.latProjet, projet.lngProjet]}
									icon={icon}
								>
									<Popup>
										<div>
											<img
												src={"data:image/png;base64," + projet.photoProjet}
												alt="image"
												style={{ width: 100 }}
											/>
											<h3>Nom : {projet.nomProjet}</h3>
											<br />
											<h5>Numéro : {projet.numeroProjet}</h5>
											<br />
											<h5>Type : {projet.typeProjet}</h5>
										</div>
									</Popup>
								</Marker>
						  ))
						: projets && (
								<Marker
									position={[projets.latProjet, projets.lngProjet]}
									icon={icon}
								>
									<Popup>
										<div>
											<img
												src={"data:image/png;base64," + projets.photoProjet}
												alt="image"
												style={{ width: 100 }}
											/>
											<h3>Nom : {projets.nomProjet}</h3>
											<br />
											<h5>Numéro : {projets.numeroProjet}</h5>
											<br />
											<h5>Type : {projets.typeProjet}</h5>
										</div>
									</Popup>
								</Marker>
						  )}
				</MapContainer>
			</div>
		</Layout>
	);
};

export default MapPage;
