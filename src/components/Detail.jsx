const Detail = ({ title, image, date, time, description, location, contact, contact_alt, tickts }) => {
	return (
		<div className="w-full flex flex-col lg:flex-row items-start justify-start py-6 lg:px-24">
			<img src={image} style={{ width: "500px" }} className="rounded-md" />
			<div className="px-2 w-full lg:px-8 mb-2">
				<h2 className="text-rose-500 text-xl uppercase mb-4 mt-4 lg:mt-0">{ title }</h2>
				<h4 className="flex flex-col lg:flex-row justify-between">
					<span className="text-gray-200 mb-2 lg:mb-0"><i className="fa fa-calendar-alt text-blue-400 mr-2"></i> Data: { date }</span>
					<span><i className="fa fa-clock text-blue-400 mr-2 mb-2 lg:mb-0"></i><span className="text-gray-200"> Horas: { time }</span></span>
					<span><i className="fa fa-location-dot mr-2 text-blue-400"></i><span className="text-gray-200"> Local: { location }</span></span>
				</h4>
				<p className="text-gray-300 text-xl my-4 text-justify">
					{ description }
				</p>
				<div className="flex flex-col w-full lg:flex-row">
					<a href={`https://wa.me/+258${contact}`} target="_blank" className="bg-green-500  text-center mb-2 lg:mb-0 lg:mr-4 text-white py-4 lg:py-2 lg:px-12 font-bold rounded">WhatsApp</a>
					<a href={`${contact_alt}`} className="bg-green-500 text-center mb-4 lg:mb-0 lg:mr-4 text-white py-4 lg:py-2 lg:px-12 font-bold rounded">Chamada</a>
					<button className="bg-blue-400 text-white py-4 lg:p-2 lg:px-12 font-bold rounded">Participar</button>
				</div>
			</div>
		</div>
	)
}

export default Detail;