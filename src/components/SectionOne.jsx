import { Link } from "react-router-dom";

const image = "./src/assets/images/moon.svg";
// const image = "./src/assets/images/bg1.jpg";

const SectionOne = () => {
	return (
		<section className="w-full lg:h-screen flex flex-col lg:mb-24 lg:flex-row items-start pt-12 lg:pt-32 px-4 justify-between bg-gradient-to-l from-gray-600 via-gray-800 to-slate-950">
			<img src={image} className="w-full ms:px-8 bg-img" style={{ width: "600px" }} />
			<aside className="w-full mt-4 lg:mt-0 lg:px-16">
				<h2 className="text-2xl font-extrabold text-blue-400 text-left uppercase mb-8">O melhor site de eventos</h2>
				<p className="text gray-900 text-xl text-gray-300 px-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Placeat, vero quos culpa, voluptas veniam recusandae
					quasi iusto iure eius assumenda, <br />
					non necessitatibus quam tempora omnis.
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Placeat, vero quos culpa, voluptas veniam recusandae
				</p>
				<Link to="/events" className="bg-gray-700 hover:bg-gray-600 rounded py-4 mt-8 lg:mt-12 flex items-center justify-center">
					<i className="fa fa-arrow-right mr-4 text-white"></i>
					<span className="text-white font-extrabold text-lg text-center mt-1">Estás a procura de um evento ?</span>
				</Link>
			</aside>
		</section>
	)
}

export default SectionOne;
