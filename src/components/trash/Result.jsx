import BEvent from "./BEvent";

const Result = ({ closeSearch }) => {
	return (
		<div className="w-full absolute top-20 flex items-start justify-end pr-24">
			<div className="w-6/12 border border-gray-600 rounded-md bg-gray-700 pt-4">
				<span className="flex items-center justify-between px-4 pb-5">
					<h2 className="text-gray-100">Search results</h2>
					<i onClick={closeSearch} className="fa fa-xl fa-close hover:text-red-400 cursor-pointer text-red-500"></i>
				</span>
				<ul className="flex flex-col justify-center items-start w-full bg-gray-50">

					<BEvent />
					<BEvent />
					<BEvent />
					<BEvent />
					<BEvent />

				</ul>
				<button className="w-full py-4 text-white text-right text-lg px-8 hover:shadow-lg hover:text-gray-300 bg-gray-600">Next page <span className="pl-4 text-white">1/5</span> </button>
			</div>
		</div>
	)
}

export default Result;