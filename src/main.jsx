import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./assets/icons/font-awesome.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Client from './pages/Client.jsx';
import Ticket from './pages/Ticket.jsx';
import Panel from "./pages/Panel.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/events",
				element: <Client />
			},
			{
				path: "/search/:search",
				element: <Client />
			},
			{
				path: "/event/:id",
				element: <Ticket />
			},
			{
				path: "/company/:id/",
				element: <Panel />
			},
			{
				path: "/ticket/add/:id",
				element: <h1 className="text-white text-center w-full">Em Construção</h1>
			},
			{
				path: "/about",
				element: <About />
			}
		]
	},

])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>,
)
