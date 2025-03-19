import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/pages/aboutUs/AboutUs'
import { AdminPanel } from './components/pages/adminPanel/AdminPanel'
import { BascetPage } from './components/pages/bascet/BascetPage'
import { Catalog } from './components/pages/catalog/Catalog'
import { Contact } from './components/pages/contact/Contact'
import { Gallery } from './components/pages/gallery/Gallery'
import { LoginPage } from './components/pages/LoginPage/LoginPage'
import { MainPage } from './components/pages/main/MainPage'
import { Payment } from './components/pages/payment and delivery/Payment'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/bascet',
		element: <BascetPage />,
	},
	{
		path: '/aboutUs',
		element: <AboutUs />,
	},
	{
		path: '/catalog',
		element: <Catalog />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/gallery',
		element: <Gallery />,
	},
	{
		path: '/paymentAndDelivery',
		element: <Payment />,
	},
	{
		path: '/loginpage',
		element: <LoginPage />,
	},
	{
		path: '/adminpanel',
		element: <AdminPanel />,
	},
])

export function App() {
	return <RouterProvider router={router} />
}
