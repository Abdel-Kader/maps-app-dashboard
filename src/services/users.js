import axios from "axios";
import { API_URL } from "./api_url";

export const add = (user) => {
	axios
		.post(API_URL + "users/", {
			nom: user.nom,
			prenom: user.prenom,
			telephone: user.telephone,
			username: user.username,
			password: user.password,
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getAll = () => {
	return axios
		.get(API_URL + "users/")
		.then((response) => {
			return response.data;
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
};

export const deleteUser = (id) => {
	return axios
		.delete(API_URL + "users/" + id)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((err) => {
			console.log("errr", err);
			return err.response.data;
		});
};
