import { Link } from "react-router-dom";

const NewEvent = ({ remove, title, image, id }) => {
	const url = `http://localhost:8080/files/${image}`;
	return (
		<div className="bg-white w-68 rounded overflow-hidden m-4">
			<img src={url} style={{ width: "380px", height: "240px" }} />
			<h2 className="text-gray-800 p-2 w-full flex items-center justify-between">
				<span className="w-full font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{ title }</span>
				{/*<i onClick={remove} id={id} className="fa fa-lg fa-times text-red-500 cursor-pointer" title="Eliminar Evento"></i>*/}
			</h2>
			<div className="text-gray-800 w-full flex items-center justify-around">
				<Link to={`/ticket/add/${id}`} className="w-full py-2 sm:py-4 uppercase bg-blue-500 text-white text-sm font-bold cursor-pointer text-center">Adicionar Bilhete</Link>
				<span onClick={remove} id={id} className="w-full py-2 sm:py-4 uppercase text-white bg-red-500 text-sm font-bold cursor-pointer text-center">Remover Evento</span>
			</div>
		</div>
	)
}

export default NewEvent;