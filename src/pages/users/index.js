import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { TrashIcon, PencilAltIcon, EyeIcon } from "@heroicons/react/outline";
import { getAll } from "../../services/users";
import { Link } from "react-router-dom";

export const Users = () => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		getAll().then((res) => {
			//console.log(res);
			setUsers(res);
		});
	}, []);
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

								{/*<th
									scope="col"
									className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
								>
									Actions
								</th>*/}
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{users && users.length > 0
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
											{/**
											 * <td className="px-6 py-4 whitespace-nowrap flex justify-center">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="flex items-center content-center justify-between text-sm font-medium text-gray-900">
															<PencilAltIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2 text-[#2c9948]" />
															<TrashIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2 text-red-600" />
															<EyeIcon className="h-4 mr-4 mt-1 sm:ml-2 sm:mb-2 text-blue-600" />
														</div>
													</div>
												</div>
											</td>
											 */}
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
