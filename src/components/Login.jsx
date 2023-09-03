import { useState, useEffect } = from "react";

const Login = () => {
		const [email, setEmail] = useState("");
		const [pass, setPass] = useState("");

		const login = (event) => {
			event.preventDefault();
			console.log(event)
		}
	return (
		<div className="w-screen h-screen fixed bg-gray-800 opacity-90 px-4 py-8 top-0 z-10 flex justify-center items-center">
			<form className="flex flex-col rounded-md shadow-lg bg-gray-700 py-8 px-4 opacity-95 z-20 justify-center">
				<h2 className="uppercase text-blue-400 text-center font-bold text-2xl">Login</h2>
				<label htmlFor="email" className="w-full shadow-lg my-4">
					<i className="fa fa-lg fa-envelope text-gray-400 px-2"></i>
					<input onChange = {((e) => setEmail(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="email" name="" placeholder="Digite teu e-mail" />
				</label>
				<label htmlFor="pass" className="w-full my-4 shadow-lg">
					<i className="fa fa-lg fa-lock text-gray-400 px-2"></i>
					<input onChange = {((e) => setPass(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="password" name="" placeholder="Digite tua senha" />
				</label>
				<p className="text-gray-400 text-right hover:underline cursor-pointer mb-2" onClick={accountLogin}>Não tenho conta</p>
				<button onClick = {login} className="w-full py-2 mt-4 rounded bg-blue-400 text-white text-xl" type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login;