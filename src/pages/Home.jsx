import React from "react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { CollectionIcon, UserGroupIcon } from "@heroicons/react/outline";
import { getAll as getAllUsers } from "../services/users";
import { getAll as getAllProjets } from "../services/projets";

export const Home = () => {
	const [users, setUsers] = useState();
	const [projets, setProjets] = useState();

	useEffect(() => {
		getAllUsers().then((res) => {
			setUsers(res);
		});
		getAllProjets().then((res) => {
			setProjets(res);
		});
	}, []);
	return (
		<Layout>
			<div className="md:pl-56 w-full flex">
				<div className="w-full md:w-1/2 xl:w-1/3 p-6">
					<div
						className="
								bg-gradient-to-b
								from-blue-200
								to-blue-100
								border-b-4 border-blue-500
								rounded-lg
								shadow-xl
								p-5
							"
					>
						<div className="flex flex-row items-center">
							<div className="flex-shrink pr-4">
								<div className="rounded-full p-4 bg-blue-600">
									<CollectionIcon className="text-white h-4" />
								</div>
							</div>
							<div className="flex-1 text-right md:text-center">
								<h5 className="font-bold uppercase text-gray-600">Projets</h5>
								<h3 className="font-bold text-3xl">
									{projets?.length}
									<span className="text-green-500">
										<i className="fas fa-caret-up"></i>
									</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 xl:w-1/3 p-6">
					<div
						className="
								bg-gradient-to-b
								from-green-200
								to-green-100
								border-b-4 border-green-600
								rounded-lg
								shadow-xl
								p-5
							"
					>
						<div className="flex flex-row items-center">
							<div className="flex-shrink pr-4">
								<div className="rounded-full p-4 bg-green-600">
									<UserGroupIcon className="text-white h-4" />
								</div>
							</div>
							<div className="flex-1 text-right md:text-center">
								<h5 className="font-bold uppercase text-gray-600">
									Utilisateurs
								</h5>
								<h3 className="font-bold text-3xl">
									{users?.length}
									<span className="text-green-500">
										<i className="fas fa-caret-up"></i>
									</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
