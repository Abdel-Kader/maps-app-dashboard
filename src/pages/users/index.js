import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { TrashIcon } from "@heroicons/react/outline";
import { getAll, deleteUser } from "../../services/users";
import { Link } from "react-router-dom";
import Loader from "../../loader.gif";
import Swal from "sweetalert2";

export const Users = () => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		getAll().then((res) => {
			//console.log(res);
			setUsers(res);
		});
	}, []);

	const deleteHandler = (id) => {
		Swal.fire({
			title: "Attention !",
			text: "Voulez vous vraiment supprimer ce utilisateur ? Il peut avoir des projets !",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Oui, suppimer",
			cancelButtonText: "Annuler",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteUser(id).then((res) => {
					console.log(res);
					if (res == true) {
						Swal.fire("Info", "Utilisateur supprimé avec succès.", "success");
						window.location.reload();
					} else {
						Swal.fire(
							"Info",
							"Une erreur s'est produite lors de l'ajout ! Veuillez vérifier que l'utilisateur n'a pas de projet créé, puis reessayer",
							"error"
						);
					}
				});
			}
		});
		//deleteUser(id);
	};
	return (
		<Layout>
			<div className="py-2 align-middle inline-block min-w-full sm:px-6 md:pl-56">
				<div className=" flex justify-end">
					<button
						type="button"
						className="flex items-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
						style={{ backgroundColor: "#2c9948" }}
					>
						<Link to="/users/add">Nouvel utilisateur</Link>
					</button>
				</div>

				<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<legend className="mb-4 text-2xl font-semibold border-b-2">
						Liste des utilisateurs
					</legend>
					{users ? (
						<table className="min-w-full divide-y divide-gray-200">
							<thead style={{ backgroundColor: "#2c9948" }}>
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
									>
										Nom
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
									>
										Prénom
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
									>
										Téléphone
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
									>
										Nom d'utilisateur
									</th>

									<th
										scope="col"
										className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
									>
										Supprimer
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{users.length > 0
									? users.map((user) => (
											<tr key={user.id}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{user.nom}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{user.prenom}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{user.telephone}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{user.username}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap flex justify-center">
													<div className="flex items-center">
														<div className="ml-4">
															<div
																className="flex items-center content-center 
														justify-between text-sm font-medium text-gray-900 cursor-pointer"
																onClick={() => deleteHandler(user.id)}
															>
																<TrashIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2 text-red-600" />
															</div>
														</div>
													</div>
												</td>
											</tr>
									  ))
									: null}
							</tbody>
						</table>
					) : (
						<div className="flex flex-col justify-center items-center">
							<span className="text-lg font-bold">
								Chargement des utilisateurs en cours ...
							</span>
							<img src={Loader} className="h-64" alt="loader" />
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};
