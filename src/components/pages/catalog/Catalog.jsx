import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Для перенаправления
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Catalog.module.css'

export function Catalog() {
	const [categories, setCategories] = useState([]) // Состояние для хранения категорий
	const [loading, setLoading] = useState(true) // Состояние для отображения загрузки
	const [error, setError] = useState(null) // Состояние для обработки ошибок
	const navigate = useNavigate()

	// Загрузка данных с API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/categories') // Запрос к API
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setCategories(data) // Сохраняем данные в состоянии
				setLoading(false) // Загрузка завершена
			} catch (error) {
				setError(error.message) // Сохраняем ошибку
				setLoading(false) // Загрузка завершена
			}
		}

		fetchData()
	}, [])

	// Обработка клика по категории
	const handleCategoryClick = categoryId => {
		navigate(`/?section=${categoryId}`) // Перенаправляем на главную страницу с параметром
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
		<div className={styles.Catalog}>
			<Header />
			<h1>Каталог</h1>
			<div className={styles.container}>
				{categories.map(category => (
					<div
						key={category.id}
						className={styles.categoryCard}
						onClick={() => handleCategoryClick(category.id)}
					>
						{/* Отображаем фотографию категории */}
						{category.image_url && (
							<img
								src={category.image_url}
								alt={category.name}
								className={styles.categoryImage}
							/>
						)}
						<h2>{category.name}</h2>
						<p>{category.description}</p>
					</div>
				))}
			</div>
			<Footer />
		</div>
	)
}
