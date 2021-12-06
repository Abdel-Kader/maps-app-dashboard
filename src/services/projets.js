import axios from "axios";
import { API_URL } from "./api_url";

export const add = (projet) => {
	axios.post(API_URL, {
		id: projet.id,
		numeroProjet: projet.numero,
		nomProjet: projet.nom,
		typeProjet: projet.type,
		latProjet: projet.lat,
		lngProjet: projet.lng,
		lienPhotoProjet: projet.lien,
		dateExecution: projet.date,
	});
};

export const getAll = () => {
	return axios
		.get(API_URL + "projets/all/")
		.then((response) => {
			return response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
};
