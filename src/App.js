import { Outlet } from 'react-router-dom';
import './app.css';
import { Home } from './pages/Home/Home';

export const App = () => {
	return (
		<>
			<Home />
			<Outlet />
		</>
	);
};
