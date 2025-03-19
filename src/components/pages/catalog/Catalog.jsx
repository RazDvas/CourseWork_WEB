import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Catalog.module.css'

export function Catalog() {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	// Загрузка данных с API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/categories')
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setCategories(data)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	const handleCategoryClick = categoryId => {
		navigate(`/?section=${categoryId}`)
	}

	if (loading) {
		return <div>Загрузка данных...</div>
	}

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
