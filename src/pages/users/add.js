import { Layout } from "../../components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../../services/api_url";

const Add = () => {
	let history = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});
	const onSubmitHandler = (data) => {
		axios
			.post(API_URL + "users/", {
				nom: data.nom,
				prenom: data.prenom,
				telephone: data.telephone,
				username: data.username,
				password: data.password,
			})
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "Succès",
					text: "Utilisateur ajouté avec succès !",
				});
				reset();
				history("/users");
			})
			.catch((err) => {
				if (err) {
					//alert(err.response.data);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: err.response.data,
					});
				}
			});
	};

	return (
		<Layout>
			<div className="py-2 align-middle flex w-full sm:px-6 md:pl-56">
				<div className="justify-center w-full">
					<div className="py-2 align-middle flex w-full sm:px-6 justify-center">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<legend className="mb-4 text-2xl font-semibold border-b-2">
								Ajouter un utilisateur
							</legend>

							<div className="w-full p-4">
								<form onSubmit={handleSubmit(onSubmitHandler)}>
									<div className="flex justify-between w-full">
										<div className="flex flex-col w-full mr-4">
											<label>Nom</label>
											<br />
											<input
												name="nom"
												type="text"
												required
												placeholder="Nom"
												className="h-12 rounded border-2 mb-8 px-4"
												{...register("nom")}
											/>
											<p style={{ color: "red" }}>{errors.nom?.message}</p>
										</div>
										<div className="flex flex-col w-full">
											<label>Prénom</label>
											<br />
											<input
												name="prenom"
												type="text"
												required
												placeholder="Prénom"
												className="h-12  rounded border-2 mb-8 px-4"
												{...register("prenom")}
											/>
											<p style={{ color: "red" }}>{errors.prenom?.message}</p>
										</div>
									</div>
									<div className="flex flex-col w-full">
										<label>Nom d'utilisateur</label>
										<br />
										<input
											name="username"
											type="text"
											required
											placeholder="Nom d'utilisateur"
											className="h-12  rounded border-2 mb-8 px-4"
											{...register("username")}
										/>
										<p style={{ color: "red" }}>{errors.username?.message}</p>
									</div>
									<div className="flex flex-col w-full">
										<label>Numéro de téléphone</label>
										<br />
										<input
											name="telephone"
											type="text"
											required
											placeholder="Numéro de téléphone"
											className="h-12  rounded border-2 mb-8 px-4"
											{...register("telephone")}
										/>
										<p style={{ color: "red" }}>{errors.telephone?.message}</p>
									</div>
									<div className="flex flex-col w-full">
										<label>Mot de passe</label>
										<br />
										<input
											name="password"
											type="password"
											required
											placeholder="Mot de passe"
											className="h-12 rounded border-2 mb-8 px-4"
											{...register("password")}
										/>
										<p style={{ color: "red" }}>{errors.password?.message}</p>
									</div>
									<br />
									<div className="flex justify-end">
										<div
											className="rounded border-2 h-10 border-[#3490DC] m-4 w-auto"
											style={{ backgroundColor: "#2c9948" }}
										>
											<button
												className="text-white h-10 w-full text-xl px-9"
												type="submit"
											>
												Enregistrer
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Add;
