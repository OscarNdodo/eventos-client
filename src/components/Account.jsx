import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Account = ({ closeLogin }) => {
	const redirect = useNavigate();
	const [create, setCreate] = useState(false);
	const [error, setError] = useState("");
	const [sucess, setSucess] = useState("");

	//New account data
	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newPass, setNewPass] = useState("");

	//Login data
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const accountLogin = () => {
		if (create) {
			setCreate(false)
		} else {
			setCreate(true);
		}
	}

	const login = async (event) => {
		event.preventDefault();
		const data = {
			email: email,
			pass: pass
		}

		await api.post("/login", data)
		.then((response) => response.data)
		.then((data) => {
			localStorage.setItem("user", JSON.stringify(data));
			setEmail("");
			setPass("");
			if (!data.error){
				closeLogin();
				return redirect(`/company/${data.user.id}`);
			} else {
				setError("Email ou Senha Incorreta!");
			}
		})
		.catch((error) => {
			setError(error.response.data);
			setTimeout(() => {
				setError("");
			}, 2000)
		})
	}

	const createAccount = async (event) => {
		event.preventDefault();
		const data = {
			name: newName,
			email: newEmail,
			phone: newPhone,
			pass: newPass
		}

		await api.post("/user/create", data)
			.then((response) => {
				setSucess(response.data);
				setNewName("");
				setNewEmail("");
				setNewPhone("");
				setNewPass("");
				setTimeout(() => {
					setSucess("");
					return setCreate(false);
			}, 2000)
			})
			.catch((error) => {
				setError(error.response.data);
				setTimeout(() => {
				setError("");
			}, 2000)
			})

	}

	return (
		<>
			<i onClick={closeLogin} className="fa fa-2xl fa-close fixed top-10 z-20 text-red-500 text-center hover:text-red-400 cursor-pointer w-full"></i>
			{
				create ? (
					<div className="w-screen h-screen fixed bg-gray-800 opacity-90 px-4 py-8 top-0 z-10 flex justify-center items-center">
						<form className="flex flex-col rounded-md shadow-lg bg-gray-700 py-8 px-4 opacity-95 z-20 justify-center">
							<h2 className="uppercase text-blue-400 text-center font-bold text-2xl">Nova Conta</h2>
								{ error.error && (<span className="text-white bg-red-500 px-4 py-2 text-center">{ error.msg }</span>)}
								{ sucess.error === false && (<span className="text-white bg-blue-400 px-4 py-2 text-center">{ sucess.msg }</span>)}
							<label htmlFor="name" className="w-full shadow p-2 my-4">
								<i className="fa fa-lg fa-user text-gray-400 px-2"></i>
								<input onChange={((e) => setNewName(e.target.value))} name="newName" className="text-white text-lg bg-gray-700 outline-none px-1" type="text" required placeholder="Digite teu nome" />
							</label>
							<label htmlFor="email" className="w-full shadow p-2 my-4">
								<i className="fa fa-lg fa-envelope text-gray-400 px-2"></i>
								<input onChange={((e) => setNewEmail(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="email" required placeholder="Digite teu email" />
							</label>
							<label htmlFor="phone" className="w-full shadow p-2 my-4">
								<i className="fa fa-lg fa-phone text-gray-400 px-2"></i>
								<input onChange={((e) => setNewPhone(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="text" required placeholder="Digite numero do celular" />
							</label>
							<label htmlFor="pass" className="w-full my-4 shadow p-2">
								<i className="fa fa-lg fa-lock text-gray-400 px-2"></i>
								<input onChange={((e) => setNewPass(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="password" required placeholder="Digite uma senha" />
							</label>
							<p className="text-gray-400 text-right hover:underline cursor-pointer mb-2" onClick={accountLogin}>Já tenho uma conta</p>
							<button onClick={createAccount} className="w-full py-2 mt-4 rounded bg-blue-400 text-white text-xl" type="submit">Criar</button>
						</form>
					</div>
				) :
					(
						<div className="w-screen h-screen fixed bg-gray-800 opacity-90 px-4 py-8 top-0 z-10 flex justify-center items-center">
							<form className="flex flex-col rounded-md shadow-lg bg-gray-700 py-8 px-4 opacity-95 z-20 justify-center">
								<h2 className="uppercase text-blue-400 text-center font-bold text-2xl">Login</h2>
								{ error.error && (<span className="text-white bg-red-500 px-4 py-2 text-center">{ error.msg }</span>)}
								<label htmlFor="email" className="w-full shadow my-6">
									<i className="fa fa-lg fa-envelope text-gray-400 p-2"></i>
									<input onChange={((e) => setEmail(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="email" placeholder="Digite teu email" />
								</label>
								<label htmlFor="pass" className="w-full my-6 shadow">
									<i className="fa fa-lg fa-lock text-gray-400 p-2"></i>
									<input onChange={((e) => setPass(e.target.value))} className="text-white text-lg bg-gray-700 outline-none px-1" type="password" placeholder="Digite tua senha" />
								</label>
								<p className="text-gray-400 text-right hover:underline cursor-pointer mb-2" onClick={accountLogin}>Não tenho conta</p>
								<button onClick={login} className="w-full py-2 mt-4 rounded bg-blue-400 text-white text-xl" type="submit">Login</button>
							</form>
						</div>
					)
			}
		</>
	)
}

export default Account;