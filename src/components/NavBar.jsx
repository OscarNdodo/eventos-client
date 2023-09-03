import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = ({ openLogin, search, logout }) => {
	const [user, setUser] = useState(true);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("user")) != null) {
			setUser(false);
		} else {
			setUser(true)
		}
	});


	return (
		<nav className="w-full px-1 z-40 sticky top-0 bg-white bg-gradient-to-l from-gray-600 via-gray-800 to-slate-950 flex items-center justify-between lg:px-24 py-1 lg:py-4">
			<Link to="/" className="flex items-center">
				<i className="fa fa-xl fa-fire text-rose-600 mr-1 text-shadow"></i>
				<h1 className="uppercase text-blue-400 text-lg pt-1 mr-4">Dr3n4</h1>
			</Link>
			<ul className="flex :items-center">
				<form className="w-10/12 lg:w-full flex lg:mr-16 border -py-4 mx-1 lg:mx-0  lg:py-0 border-gray-600 pr-2 lg:px-8 rounded-md bg-gray-700">
					<input className="w-10/12 outline-none px-2 lg:pr-4 bg-gray-700 py-1 lg:p-2  text-white text-lg focus:shadow-xl" type="search" name="search" placeholder="Pesquise aqui..." required autoComplete="true" />
					<button type="submit" onClick={search} className="w-2/12 fa fa-lg fa-search text-gray-500 hover:text-gray-300"></button>
				</form>
				{
					user ? (
						<li onClick={openLogin} className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 border border-gray-600 px-4 lg:px-8 py-2 rounded">
							<i className="fa fa-sign-in lg:mr-2 text-white"></i>
							<button className="login text-white hover:text-gray-300">Entrar</button>
						</li>
					)
						:
						(
							<li onClick={logout} className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 border border-gray-600 lg:px-8 py-2 rounded">
								<i className="fa fa-sign-out lg:mr-2 text-white"></i>
								<button className="login text-white hover:text-gray-300">Sair</button>
							</li>
						)
				}
			</ul>
		</nav>
	)
}

export default NavBar;