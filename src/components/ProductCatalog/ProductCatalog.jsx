import React, { useEffect, useState } from 'react'
import { ProductList } from '../ProductList/ProductList'
import styles from './ProductCatalog.module.css'

export function ProductCatalog() {
	const [products, setProducts] = useState([]) // Состояние для хранения товаров
	const [loading, setLoading] = useState(true) // Состояние для отображения загрузки
	const [error, setError] = useState(null) // Состояние для обработки ошибок

	// Загрузка данных с API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/products') // Запрос к API
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setProducts(data) // Сохраняем данные в состоянии
				setLoading(false) // Загрузка завершена
			} catch (error) {
				setError(error.message) // Сохраняем ошибку
				setLoading(false) // Загрузка завершена
			}
		}

		fetchData()
	}, [])

	// Функция для фильтрации товаров по категории
	const filterProductsByCategory = categoryId => {
		return products.filter(product => product.category_id === categoryId)
	}

	// Отображение состояния загрузки
	if (loading) {
		return <div>Загрузка данных...</div>
	}

	// Отображение ошибки
	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<div className={styles.catalog}>
			<h1 className={styles.catalogTitle}>Каталог товаров</h1>

			{/* Секция для подарочных ножей (category_id = 1) */}
			<section id='section1' className={styles.section}>
				<h2 className={styles.sectionTitle}>Подарочные ножи</h2>
				<ProductList products={filterProductsByCategory(1)} />
			</section>

			{/* Секция для шампуров (category_id = 2) */}
			<section id='section2' className={styles.section}>
				<h2 className={styles.sectionTitle}>Шампура</h2>
				<ProductList products={filterProductsByCategory(2)} />
			</section>

			{/* Секция для зажигалок (category_id = 3) */}
			<section id='section3' className={styles.section}>
				<h2 className={styles.sectionTitle}>Зажигалки</h2>
				<ProductList products={filterProductsByCategory(3)} />
			</section>

			{/* Секция для портсигаров (category_id = 4) */}
			<section id='section4' className={styles.section}>
				<h2 className={styles.sectionTitle}>Портсигары</h2>
				<ProductList products={filterProductsByCategory(4)} />
			</section>

			{/* Секция для подстаканников (category_id = 5) */}
			<section id='section5' className={styles.section}>
				<h2 className={styles.sectionTitle}>Подстаканники</h2>
				<ProductList products={filterProductsByCategory(5)} />
			</section>

			{/* Секция для сувениров (category_id = 6) */}
			<section id='section6' className={styles.section}>
				<h2 className={styles.sectionTitle}>Сувениры</h2>
				<ProductList products={filterProductsByCategory(6)} />
			</section>
		</div>
	)
}
