import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '/src/layout/Home';
import Dex from '/src/layout/Dex';
import Detail from '/src/layout/Detail';
import NotFound from '/src/layout/NotFound';
import GlobalStyle from '../GlobalStyle';

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
