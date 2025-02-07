import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from '~/GlobalStyle';
import Home from './Home';
import Dex from './Dex';
import Detail from './Detail';
import NotFound from './NotFound';
import { ToastContainer } from 'react-toastify';
import { toastOptions } from '~constant/toast';
import styled from 'styled-components';

function Router() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<StToastContainer {...toastOptions} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dex" element={<Dex />} />
				<Route path="/detail/:pid" element={<Detail />} />
				<Route path="*" element={<NotFound />} /> {/* 404 경로 추가 */}
			</Routes>
		</BrowserRouter>
	);
}

const StToastContainer = styled(ToastContainer)`
	.Toastify__toast {
		width: 400px;
		height: 100px;
		font-size: 1.2rem;
	}

	.Toastify__toast-icon {
		width: 50px;
		height: 50px;
	}
`;

export default Router;
