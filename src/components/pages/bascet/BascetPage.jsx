import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext/UserContext.jsx' // Импортируем контекст
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './BascetPage.module.css'

export function BascetPage() {
	const [cartItems, setCartItems] = useState([]) // Состояние для хранения товаров в корзине
	const [loading, setLoading] = useState(true) // Состояние для отображения загрузки
	const [error, setError] = useState(null) // Состояние для обработки ошибок

	// Получаем данные пользователя из контекста
	const { user } = useContext(UserContext)

	// Загрузка данных с API
	useEffect(() => {
		const fetchData = async () => {
			if (!user) {
				setLoading(false)
				return // Если пользователь не авторизован, выходим
			}

			try {
				const response = await fetch(
					`http://localhost:5000/api/cart/${user.id}`
				) // Запрос к API
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setCartItems(data) // Сохраняем данные в состоянии
				setLoading(false) // Загрузка завершена
			} catch (error) {
				setError(error.message) // Сохраняем ошибку
				setLoading(false) // Загрузка завершена
			}
		}

		fetchData()
	}, [user]) // Зависимость от user: при изменении пользователя данные обновляются

	// Отображение состояния загрузки
	if (loading) {
		return <div>Загрузка данных...</div>
	}

	// Отображение ошибки
	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<div className={styles.BascetPage}>
			<Header />
			<div className={styles.container}>
				<h2 className={styles.bascetText}>Корзина</h2>
				<div>
					<h2>Заказы</h2>
				</div>
				<div className={styles.list}>
					{cartItems.length > 0 ? (
						cartItems.map(item => (
							<div key={item.id} className={styles.cartItem}>
								<h3>{item.title}</h3>
								<p>Количество: {item.quantity}</p>
								<p>Цена: {item.price} руб.</p>
							</div>
						))
					) : (
						<p>Ваша корзина пуста.</p>
					)}
				</div>
			</div>
			<div className={styles.Footer}>
				<Footer />
			</div>
		</div>
	)
}
