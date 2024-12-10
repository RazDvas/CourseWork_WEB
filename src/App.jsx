import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { BascetPage } from './components/pages/bascet/BascetPage'
import { MainPage } from './components/pages/main/MainPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/bascet',
		element: <BascetPage />,
	},
])

export function App() {
	return <RouterProvider router={router} />
}
