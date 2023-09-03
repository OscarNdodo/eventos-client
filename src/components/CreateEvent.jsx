const CreateEvent = ({ openMenu, eventLength }) => {
	return (
		<div className="w-full flex items-center cursor-pointer py-3 justify-center bg-gradient-to-r from-blue-300 to-blue-500 mt-8">
			<div onClick={openMenu} to="/" className="w-64 py-6 bg-gray-100 hover:scale-90 rounded-md flex flex-col items-center justify-center">
				<i className="fa fa-xl fa-plus font-bold py-6 border border-blue-400 px-4 rounded-full"></i>
				<h2 className="uppercase py-4 font-bold">Criar Evento</h2>
				<span className="text-3xl">
					{
						eventLength < 10 ? '0'+eventLength : eventLength
					}
				</span>
			</div>
		</div>
	)
}

export default CreateEvent;