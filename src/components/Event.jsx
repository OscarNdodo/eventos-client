import { Link } from "react-router-dom";

const Event = ({ id, name, title, image }) => {
	const url = `http://localhost:8080/files/${image}`;
	return (
		<Link to={`/event/${id}`} className="w-80 h-56 bg-white flex flex-col items-start shadow-md m-4 rounded-md overflow-hidden hover:shadow-xl hover:bg-shadow hover:scale-105">
			<div className="w-full bg-gray-700 flex items-center justify-start border-b py-1">
				<i className="fa fa-flag text-white  rounded-full p-2"></i>
				<span className="text-md text-white overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</span>
			</div>
			{/*<h2 className="w-full text-blue-400 uppercase text-lg pb-4 pt-4 px-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h2>*/}
			<img src={url} className="w-full h-96 text-lg text-black" />


		</Link>
	)
}

export default Event;