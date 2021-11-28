import React, { Suspense, Component, Provider } from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'


const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<p>loading...</p>}>
				<Routes>
					<Route path='/' name='Login' element={<Login />} />
                    <Route path='/app' name='Layout' element={<Layout />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
