import * as yup from "yup";

export const loginSchema = yup.object().shape({
	nom: yup.string().trim().required("Le nom ne doit pas être vide !"),
	prenom: yup.string().trim().required("Le prénom ne doit pas être vide !"),
	username: yup
		.string()
		.trim()
		.required("Le nom d'utilisateur ne doit pas être vide !"),
	telephone: yup
		.number()
		.required("Le numéro est obligatoire")
		.positive()
		.integer(),
	password: yup
		.string()
		.trim()
		.min(4, "Le mot de passe doit avoir au moins 4 caractères !")
		.max(32)
		.required("Le mot de passe est obligatoire"),
});
