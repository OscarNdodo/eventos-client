import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import Form from "../components/Form";
import NewEvent from "../components/NewEvent";
import api from "../services/api";

const Panel = () => {
	const { id } = useParams();
	const redirect = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));
	const token = user.token;

	const [error, setError] = useState("");

	const [create, setCreate] = useState(false);
	const [events, setEvents] =useState([]);
	const [eventLength, setEventLength] =useState(0);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("");
	const [time, setTime] = useState("");
	const [contactAlt, setContactAlt] = useState("");

	//Load events
	useEffect(() => {
		if (id == user.user.id){

		api.get(`/user/${id}/events`, {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
		.then((response) => {
			setEvents(response.data.events);
			setEventLength(response.data.events.length);
		})
		.catch((error) => redirect("/"))
	} else {redirect("/"); }

	},[id])

	//Ge values
	const getTitle = (event) => setTitle(event.target.value);
	const getDescription = (event) => setDescription(event.target.value);
	const getImage = (event) => setImage(event.target.files[0]);
	const getDate = (event) => setDate(event.target.value);
	const getLocation = (event) => setLocation(event.target.value);
	const getTime = (event) => setTime(event.target.value);
	const getContact = (event) => setContactAlt(event.target.value);


	//Create events
	const uploadEvent = async (event) => {
		event.preventDefault();
		const data = new FormData();
		data.append("title", title);
		data.append("description", description);
		data.append("image", image);
		data.append("date", date);
		data.append("location", location);
		data.append("time", time);
		data.append("contact_alt", contactAlt);

		await api.post(`/user/${id}/event/create`, data, {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
			.then((response) => {
				if (response.data.error === false){
					//Load events
					useEffect(() => {
						api.get(`/user/${id}/events`, {
							headers: {
								"Authorization": `Bearer ${token}`
							}
						})
						.then((response) => {
							setEvents(response.data.events);
							setEventLength(response.data.events.length);
						})
							.catch((error) => console.log(error))

						},[id])
					setCreate(false);				
				}
			})
			.catch((error) => {
				if (error.response.data.msg ) {
					setError(error.response.data.msg);
				} else {
					setError("Priecha Todos Dados!");
				}
				setTimeout(() => {
					setError("");
				}, 3000)
			})

	}

	const openMenu = () => {
		setCreate(true);
	}
	const closeMenu = () => {
		setCreate(false);
	}
	const remove = async (event) => {
		const event_id = event.target.id;
		// useEffect(() => {
		let confirma = confirm("Você Quer Eliminar Este Evento ?");
		if(confirma){

			await api.delete(`/user/${id}/event/${event_id}/delete`, {
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((response) => {
				api.get(`/user/${id}/events`, {
					headers: {
					"Authorization": `Bearer ${token}`
				}
				})
					.then((response) => {
						setEvents(response.data.events);
						setEventLength(response.data.events.length);
					})
				})
			.catch((error) => console.log(error))
		}
		// });
	}
	return (
		<div>

			<div className="w-full flex items-center justify-center">
				<CreateEvent openMenu={openMenu} eventLength={eventLength}/>
				{create && (<Form closeMenu={closeMenu}
					//geting data
					getTitle={getTitle}
					getDescription={getDescription}
					getImage={getImage}
					getType={getType}
					getDate={getDate}
					getLocation={getLocation}
					getTime={getTime}
					getContact={getContact}
					//Alert
					error={error}
					//Doing data upload
					uploadEvent={uploadEvent}

				 />)}
			</div>
			<div className="w-full flex justify-center flex-wrap py-8">
				{
					events.length > 0 ? 
						(events.map((element) => (<NewEvent key={element.id} title={element.title} image={element.image} id={element.id} remove={remove} />)))
						: (<span className="bg-white p-4 text-gray-700">Não tens nenhum evento criado.</span>)
				}

			</div>

		</div>
	)
}

export default Panel;