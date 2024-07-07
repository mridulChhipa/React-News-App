import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './ErrorPage';
import News from './components/News';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App  />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <News key="general" category="general"/>,
			},
			{
				path: "/business",
				element: <News key="business" category="business"/>,
			},
			{
				path: "/sports",
				element: <News key="sports" category="sports"/>,
			},
			{
				path: "/technology",
				element: <News key="technology" category="technology"/>,
			},
			{
				path: "/science",
				element: <News key="science" category="science"/>,
			},
			{
				path: "/entertainment",
				element: <News key="entertainment" category="entertainment" page={1}/>,
			},
			{
				path: "/health",
				element: <News category="health" page={1}/>,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
