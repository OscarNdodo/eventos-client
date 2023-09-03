import { useState } from "react";
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
	
	const redirect = useNavigate();
	const [isLogged, setIsLogged] = useState(false);
	// const logged = JSON.parse(localStorage.getItem("user"));

	const openLogin = () => {
		setIsLogged(JSON.parse(localStorage.getItem("user")));
		if(JSON.parse(localStorage.getItem("user")) != null) {
			setIsLogged(false);
			return redirect(`/company/${JSON.parse(localStorage.getItem("user")).user.id}`);
		}else{
			setIsLogged(true);
		}

	}

	const logout = () => {
			localStorage.setItem("user", null);
			return redirect("/");
	}

	const closeLogin = () => {
		setIsLogged(false);
	}
	const search = (event) => {
		event.preventDefault();
		const content = [...event.target.parentNode];
		if (content[0].value.trim() != "") {
			redirect("/search/" + content[0].value.toLowerCase());
			content[0].value = "";
		}
	}

	return (
		<>
			{isLogged && (
				<Account closeLogin={closeLogin} />
			)}
			<header className="sticky top-0">
				<NavBar openLogin={openLogin} search={search} logout={logout}/>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default App;