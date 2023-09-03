import { Link } from "react-router-dom"

const BEvent = () => {
	return (
		<Link to="/" className="w-full flex flex-col justify-center bg-gray-50 my-2 px-4 shadow-md">
			<span className="">
				<i className="fa fa-location-dot text-blue-400 pr-2"></i>
				<span className="text-gray-800 text-md ml-2">Endereco do evento</span>
			</span>
			<p className="text-blue-500 uppercase text-lg">Name Event</p>
			<span className="w-full text-right text-gray-500">Date: 90/65/2101</span>
		</Link>

	)
}

export default BEvent;