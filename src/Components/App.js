import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// ROUTERS -------------------------------------------------------------
import { Route, Routes } from 'react-router-dom';
import PhoneBookPage from './Pages/PhonebookPage/PhoneBookPage';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import AppBar from './AppBar';

const App = () => {



	return (
		<div>
			<AppBar />
			<Routes>
				<Route path='/login' exact element={<LoginPage />} />
				<Route path='/Home' exact element={<HomePage />} />
				<Route path='/contacts' exact element={<PhoneBookPage />} />
				<Route path='/register' exact element={<AuthorizationPage />} />
			</Routes>
		</div>
	);
};

export default App;
