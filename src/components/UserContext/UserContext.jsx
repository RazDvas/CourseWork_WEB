import React, { createContext, useState } from 'react'

// Создаем контекст
export const UserContext = createContext()

// Провайдер для контекста
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null) // Состояние пользователя

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
