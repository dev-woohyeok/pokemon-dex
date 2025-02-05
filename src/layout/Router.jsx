import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from '~/GlobalStyle';
import Home from './Home';
import Dex from './Dex';
import Detail from './Detail';
import NotFound from './NotFound';

function Router() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dex" element={<Dex />} />
				<Route path="/detail/:pid" element={<Detail />} />
				<Route path="*" element={<NotFound />} /> {/* 404 경로 추가 */}
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
