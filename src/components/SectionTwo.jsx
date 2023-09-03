import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "./Account";

const image = "./src/assets/images/globe.svg";

const SectionTwo = () => {

	const redirect = useNavigate();

	const [isLogged, setIsLogged] = useState(false);

	const login = () => {
		setIsLogged(JSON.parse(localStorage.getItem("user")));
		if(JSON.parse(localStorage.getItem("user")) != null) {
			setIsLogged(false);
			return redirect(`/company/${JSON.parse(localStorage.getItem("user")).user.id}`);
		}else{
			setIsLogged(true);
		}
	}


	const closeLogin = () => {
		setIsLogged(false);
	}
	return (
		<>
			{
				isLogged && (
					<Account closeLogin={closeLogin} />
				)
			}
			<section className="w-full lg:h-screen flex flex-col lg:mb-0 lg:flex-row-reverse items-start pt-16 lg:pt-28 ms:px-4 justify-between bg-gradient-to-l from-gray-600 via-gray-800 to-slate-950">
				<img src={image} className="w-full px-2 lg:px-8 bg-img" style={{ width: "600px" }} />
				<aside className="w-full lg:p-16 p-4">
					<h2 className="text-2xl font-extrabold text-rose-500 text-left uppercase mb-4 mt-8 lg:mt-0 lg:mb-8">Promoção de eventos</h2>
					<p className="text gray-900 text-xl text-gray-300 px-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Placeat, vero quos culpa, voluptas veniam recusandae
						quasi iusto iure eius assumenda, <br />
						non necessitatibus quam tempora omnis.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Placeat, vero quos culpa, voluptas veniam recusandae
					</p>
					<span onClick={login} className="bg-gray-700 hover:bg-gray-600 cursor-pointer rounded py-4 mt-8 lg:mt-12 flex items-center justify-center">
						<i className="fa fa-arrow-right mr-4 text-blue-400"></i>
						<span className="text-blue-400 font-extrabold text-lg text-center mt-1">Tens algum evento para publicar ?</span>
					</span>
				</aside>
			</section>
		</>
	)
}

export default SectionTwo;