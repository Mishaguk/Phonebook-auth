import reactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

toastr.options = {
	closeButton: false,
	debug: false,
	newestOnTop: false,
	progressBar: false,
	positionClass: 'toast-top-right',
	preventDuplicates: false,
	onclick: null,
	showDuration: '300',
	hideDuration: '1000',
	timeOut: '5000',
	extendedTimeOut: '1000',
	showEasing: 'swing',
	hideEasing: 'linear',
	showMethod: 'fadeIn',
	hideMethod: 'fadeOut',
};

reactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
