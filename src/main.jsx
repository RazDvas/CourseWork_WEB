import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App.jsx'
import store from './app/store'
import { UserProvider } from './components/UserContext/UserContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</UserProvider>
	</StrictMode>
)
