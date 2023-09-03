const Form = ({ closeMenu, uploadEvent, getTitle, getDescription, getImage, getDate, getLocation, getTime, getContact, error }) => {
	return (
		<form className="absolute top-28 bg-gray-100 w-80 flex flex-col items-start justify-center rounded-md py-2 px-4">
			<h2 className="text-xl w-full text-center text-blue-500 font-bold uppercase my-4">Novo Evento</h2>
			{ error && (<span className="bg-red-400 text-white px-4 py-2 w-full">{error}</span>) }
			<span className="text-sm text-gray-700 ml-1">Titulo do evento</span>
			<input onChange={getTitle} className="w-full border py-2 text-black bg-gray-100  outline-none px-2 my-2" type="text" required placeholder="Titulo do evento a anunciar" />
			<span className="text-sm text-gray-700 ml-1">Descrição do evento</span>
			<textarea   onChange={getDescription} className="w-full h-24 border py-2 text-black bg-gray-100 outline-none px-2 my-2" > </textarea>
			<span className="text-sm text-gray7400 ml-1">Imagem</span>
			<input onChange={getImage} className="w-full border py-2 text-black bg-gray-100 outline-none px-2 my-2" type="file" required />
			<span className="text-sm text-gray-700 ml-1">Categória do evento</span>
			<span className="text-sm text-gray-700 ml-1">Local</span>
			<input onChange={getLocation} className="w-full border py-2 text-black bg-gray-100 outline-none px-2 my-2" type="text" required placeholder="Local da realização do evento" />
			<span className="text-sm text-gray-700 ml-1">Data de realização</span>
			<input onChange={getDate} className="w-full border py-2 text-black bg-gray-100 outline-none px-2 my-2" type="date" required />
			<span className="text-sm text-gray-700 ml-1">Hora de realização</span>
			<input onChange={getTime} className="w-full border py-2 text-black bg-gray-100 outline-none px-2 my-2" type="time" required />
			<span className="text-sm text-gray-700 ml-1">Contacto</span>
			<input onChange={getContact} className="w-full border py-2 text-black bg-gray-100 outline-none px-2 my-2" type="number" required placeholder="Número de contacto aleternativo" />
			<button onClick={uploadEvent} type="submit" className="w-full bg-blue-400 text-white text-lg py-1 text-center mt-4 rounded hover:bg-blue-500">Concluido</button>
			<button onClick={closeMenu} type="reset" className="w-full bg-red-400 text-white text-lg py-1 mt-2 text-center rounded hover:bg-red-500">Cancelar</button>
		</form>
	)
}

export default Form;