import React, { useEffect, useState } from 'react'
import { ProductCard } from '../productCard/ProductCard'
import styles from './MainProductCard.module.css'

export function MainProductCard() {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/products') // Запрос к API
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setProducts(data) // Сохраняем данные в состояние
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) {
		return <div>Загрузка данных...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<div className={styles.MainProductCard}>
			<div className={styles.container}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						className={styles.elem}
					/>
				))}
			</div>
		</div>
	)
}
