import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { getAll } from "../../services/projets";

export const Projet = () => {
	const [projets, setProjets] = useState(null);

	useEffect(() => {
		getAll().then((res) => {
			console.log(res);
			setProjets(res);
		});
	}, []);
	return (
		<Layout>
			<div className="py-2 align-middle inline-block min-w-full sm:px-6 md:pl-56">
				{/*<div className=" flex justify-end">
							<button
								type="button"
								className="flex items-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2c9948] hover:bg-[#2c9948] focus:outline-none focus:ring-2 focus:ring-offset-2"
							>
								Nouveau projet
							</button>
	</div>*/}

				<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<legend className="mb-4 text-2xl font-semibold border-b-2">
						Liste des Projets
					</legend>
					<table className="min-w-full divide-y divide-gray-200">
						<thead style={{ backgroundColor: "#2c9948" }}>
							<tr>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Numéro du projet
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Nom du projet
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Date d'exécution
								</th>

								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Type de projet
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Coordonnées
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
								>
									Ajouté par
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{projets && projets.length > 0
								? projets.map((projet) => (
										<tr key={projet.id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{projet.numeroProjet}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{projet.nomProjet}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{projet.dateExecution}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{projet.typeProjet}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															<span className="font-semibold">Latitude</span> :
															{projet.latProjet}
														</div>
														<div className="text-sm font-medium text-gray-900">
															<span className="font-semibold">Longitude</span> :
															{projet.lngProjet}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															{projet.utilisateur.nom}{" "}
															{projet.utilisateur.prenom}
														</div>
													</div>
												</div>
											</td>
										</tr>
								  ))
								: null}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	);
};
