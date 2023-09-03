import { Link } from "react-router-dom";

const SectionThree = () => {
	return (
		<section className="w-full lg:h-screen flex flex-col lg:flex-row items-center pt-28 px-4 justify-between bg-gradient-to-l from-gray-600 via-gray-800 to-slate-950">
			<i className="fa lg:fa-3xl fa-fire w-ful px-8 text-rose-500 bg-img shadow"></i>
			<aside className="w-full lg:px-28 py-16 lg:py-24 lg:p-0">
				<h2 className="text-2xl font-extrabold text-white text-left uppercase mb-8">Sobre nós & FeedBack</h2>
				<p className="text gray-900 text-xl text-gray-300 px-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Placeat, vero quos culpa, voluptas veniam recusandae
					quasi iusto iure eius assumenda, <br />
					non necessitatibus quam tempora omnis.
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Placeat, vero quos culpa, voluptas veniam recusandae
				</p>
				<Link to="/about" className="bg-gray-700 hover:bg-gray-600 rounded py-4 mt-12 flex items-center justify-center">
					<i className="fa fa-arrow-right mr-4 text-blue-400"></i>
					<span className="text-blue-400 font-extrabold text-lg text-center mt-1">O que gostaria que melhorassemos ?</span>
				</Link>
			</aside>
		</section>
	)
}

export default SectionThree;