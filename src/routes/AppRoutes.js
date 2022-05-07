import { Caracters } from 'pages/Characters'
import { Home } from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Caracters' element={<Caracters />} />
			</Routes>
		</BrowserRouter>
	)
}
