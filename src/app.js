import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error-page';
import LoginScreen from './pages/login-screen';
import MainScreen from './pages/main-screen';

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginScreen />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/feed",
		element: <MainScreen/>,
		errorElement: <ErrorPage />,
	}
]);

const App = () => {
	return (
		<div data-theme="bumblebee">
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</div>
	);
};
export default App;