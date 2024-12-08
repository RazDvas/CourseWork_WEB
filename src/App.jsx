import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { MainPage } from './components/pages/main/MainPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
])

export function App() {
	return <RouterProvider router={router} />
}
