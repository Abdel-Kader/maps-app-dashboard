import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema/auth";
import { Layout } from "./components/Layout";

const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});
	const onSubmitHandler = (data) => {
		console.log({ data });
		reset();
	};
	return (
		<Layout>
			<form onSubmit={handleSubmit(onSubmitHandler)}>
				<h2 style={{ backgroundColor: "#eca0ff" }}>Lets sign you in.</h2>
				<br />

				<input {...register("email")} placeholder="email" type="text" />
				<p style={{ color: "red" }}>{errors.email?.message}</p>
				<br />

				<input
					{...register("password")}
					placeholder="password"
					type="password"
				/>
				<p>{errors.password?.message}</p>
				<br />

				<button type="submit">Sign in</button>
			</form>
		</Layout>
	);
};

export default App;
