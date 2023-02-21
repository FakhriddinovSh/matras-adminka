import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import { App } from './App';
import { Customers } from './components/Customers/Customers';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

export const router = createBrowserRouter(
	createRoutesFromElements(
		localStorage.getItem('login-token') ? (
			<Route path="/*" element={<App />} />
		) : (
			<Route path="/" element={<Login />}></Route>
		),
	),
);
