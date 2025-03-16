import React, { useContext, useEffect, useState } from 'react'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { UserContext } from '../../UserContext/UserContext'
import styles from './BascetPage.module.css'

export function BascetPage() {
	const { user } = useContext(UserContext)
	const [cartItems, setCartItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!user) {
			setLoading(false)
			return
		}

		const fetchCart = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/api/cart/${user.user_id}`
				)
				if (!response.ok) {
					throw new Error('Ошибка при загрузке корзины')
				}
				const data = await response.json()
				setCartItems(data)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		fetchCart()
	}, [user])

	// Функция для подсчета общей стоимости товаров в корзине
	const calculateTotalPrice = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	// Функция для удаления товара из корзины
	const handleRemoveFromCart = async productId => {
		try {
			const response = await fetch(
				`http://localhost:5000/api/cart/${user.user_id}/${productId}`,
				{
					method: 'DELETE',
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка при удалении товара из корзины')
			}

			// Обновляем состояние корзины, удаляя товар
			setCartItems(cartItems.filter(item => item.product_id !== productId))
		} catch (error) {
			setError(error.message)
		}
	}

	const handlePlaceOrder = async () => {
		try {
			const totalAmort = calculateTotalPrice()
			const orderResponse = await fetch('http://localhost:5000/api/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user_id: user.user_id,
					total_amort: totalAmort,
				}),
			})

			if (!orderResponse.ok) {
				throw new Error('Ошибка при создании заказа')
			}

			const orderData = await orderResponse.json()
			const orderId = orderData.id

			for (const item of cartItems) {
				const orderItemResponse = await fetch(
					'http://localhost:5000/api/order-items',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							order_id: orderId,
							product_id: item.product_id,
							quantity: item.quantity,
							price: item.price,
						}),
					}
				)

				if (!orderItemResponse.ok) {
					throw new Error('Ошибка при добавлении элемента заказа')
				}
			}

			alert('Заказ успешно создан!')
			setCartItems([])
		} catch (error) {
			setError(error.message)
		}
	}

	if (loading) {
		return <div>Загрузка корзины...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	if (!user) {
		return <div>Пожалуйста, войдите в систему, чтобы просмотреть корзину.</div>
	}

	if (cartItems.length === 0) {
		return <div>Ваша корзина пуста.</div>
	}

	return (
		<>
			<Header />
			<div className={styles.cartContainer}>
				<h1 className={styles.cartTitle}>Корзина</h1>
				<div className={styles.cartItems}>
					{cartItems.map((item, index) => (
						<div
							key={`${item.product_id}-${index}`}
							className={styles.cartItem}
						>
							<img
								src={item.image_url}
								alt={item.name}
								className={styles.cartItemImage}
							/>
							<div className={styles.cartItemDetails}>
								<h3 className={styles.cartItemName}>{item.name}</h3>
								<p className={styles.cartItemDescription}>{item.description}</p>
								<p className={styles.cartItemMaterial}>
									Материал: {item.material}
								</p>
								<p className={styles.cartItemPrice}>{item.price} руб.</p>
								<p className={styles.cartItemQuantity}>
									Количество: {item.quantity}
								</p>
								<button
									onClick={() => handleRemoveFromCart(item.product_id)}
									className={styles.removeButton}
								>
									Убрать из корзины
								</button>
							</div>
						</div>
					))}
				</div>
				<div className={styles.totalPrice}>
					<h3>Общая стоимость: {calculateTotalPrice()} руб.</h3>
				</div>
				<button onClick={handlePlaceOrder} className={styles.orderButton}>
					Сделать заказ
				</button>
			</div>
			<Footer />
		</>
	)
}
