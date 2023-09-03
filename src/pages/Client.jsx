import { useParams, Link } from "react-router-dom";
import Event from "../components/Event";
import api from "../services/api";
import { useState, useEffect } from "react";
// import Filter from "../components/Filter";

const Client = () => {
	const { search } = useParams();
	const [events, setEvents] = useState([]);
	if (!search) {
		useEffect(() => {
			api.get("/events/20")
			.then((response) => {
				return response.data.events
			})
			.then((data) => setEvents(data.rows))
			.catch((error) => console.log(error))
		})
	} else {
		useEffect(() => {
			const data = {
				title: search
			}
			api.post("/search", data)
			.then((response) => response.data.results)
			.then((result) => setEvents(result))
			.catch((error) => console.log(error))
		})
	}

	return (
		<div className="w-full flex flex-wrap justify-center py-8 bg-gradient-to-r from-blue-300 to-blue-500">
			{
				//name, date, title, description
				events.length > 0 ? 
					events.map((element) => <Event key={element.id} id={element.id} title={element.title} image={element.image} />)
					: <h1 className="text-white text-xl ">{`Evento "${search}" não foi encontrado!`} <br /> <Link to="/events" className="underline font-thin">Veja os eventos disponiveis</Link></h1>
			}
			{/* <div className="w-full flex justify-center my-8">
				<Filter />
			</div> */}
		</div>
	)
}

export default Client;