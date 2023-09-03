import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";


const Ticket = () => {
	const { id } = useParams();
	const [event, setEvent] = useState({});
	useEffect(() => {
		api.get(`event/${id}/details`)
		.then((response) => response.data.event)
		.then((data) => {
			setEvent(data);
		},[event])
		.catch((error) => console.log(error))
	});
	return (
		<>
			<Detail
				key = { event.id }
				title = { event.title }
				image = {`http://localhost:8080/files/${String(event.image)}`}
				date = { event.date }
				time = { event.time }
				location = { event.location }
				description = { event.description }
				contact = { event.contact }
				contact_alt = { event.contact_alt }
				tickts = { event.tickts }

			 />
		</>
	)
}

export default Ticket;