import React, { useContext } from 'react'
import { UserContext } from '../UserContext/UserContext'
import styles from './ProductCard.module.css'

export function ProductCard({ product }) {
	const { user } = useContext(UserContext) // Получаем данные пользователя из контекста

	const handleAddToCart = async () => {
		if (!user || !user.user_id) {
			alert('Пожалуйста, войдите в систему, чтобы добавить товар в корзину.')
			return
		}

		if (!product || !product.product_id) {
			alert('Ошибка: товар не найден.')
			return
		}

		try {
			const requestBody = {
				userId: user.user_id,
				productId: product.product_id,
				quantity: 1,
			}

			console.log('Отправляемые данные:', requestBody) // Логирование данных

			const response = await fetch('http://localhost:5000/api/cart', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestBody),
			})

			console.log('Статус ответа:', response.status) // Логирование статуса ответа

			if (!response.ok) {
				throw new Error('Ошибка при добавлении товара в корзину')
			}

			const data = await response.json()
			console.log('Ответ от сервера:', data) // Логирование ответа

			if (data.success) {
				alert('Товар успешно добавлен в корзину!')
			} else {
				alert('Не удалось добавить товар в корзину.')
			}
		} catch (error) {
			console.error('Ошибка:', error)
			alert('Не удалось добавить товар в корзину.')
		}
	}

	return (
		<div className={styles.productCard}>
			<img
				src={product.image_url}
				alt={product.name}
				className={styles.productImage}
			/>
			<h3 className={styles.productName}>{product.name}</h3>
			<p className={styles.productDescription}>{product.description}</p>
			<p className={styles.productMaterial}>Материал: {product.material}</p>
			<p className={styles.productPrice}>{product.price} руб.</p>
			<button className={styles.addToCartButton} onClick={handleAddToCart}>
				Добавить в корзину
			</button>
		</div>
	)
}
