import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormPage from './pages/FormPage'
import HomePage from './pages/HomePage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/form' element={<FormPage />} />
			</Routes>
		</div>
	)
}

export default App
