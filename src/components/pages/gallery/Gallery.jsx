import React, { useEffect, useState } from 'react'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { ImageCard } from '../../ImageCard/ImageCard'
import styles from './Gallery.module.css'

export function Gallery() {
	const [galleryImages, setGalleryImages] = useState([]) // Состояние для хранения данных
	const [loading, setLoading] = useState(true) // Состояние для отображения загрузки
	const [error, setError] = useState(null) // Состояние для обработки ошибок

	// Загрузка данных с API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/gallery') // Запрос к API
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setGalleryImages(data) // Сохраняем данные в состоянии
				setLoading(false) // Загрузка завершена
			} catch (error) {
				setError(error.message) // Сохраняем ошибку
				setLoading(false) // Загрузка завершена
			}
		}

		fetchData()
	}, [])

	// Отображение состояния загрузки
	if (loading) {
		return <div>Загрузка данных...</div>
	}

	// Отображение ошибки
	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<div className={styles.Gallery}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Галерея</h1>
				<div className={styles.preText}>
					<p>
						Зародившись много тысяч лет назад, искусство художественного литья и
						сегодня обретает новых поклонников, будоражит умы магией превращений
						металла, восхищает взоры прекрасными формами изделий.
					</p>
					<p>
						В России художественное литьё всегда пользовалось неизменным
						успехом. Литейщики, вдохновлённые опытом старых мастеров,
						совершенствуют технологии и создают новые творения, которые дарят
						людям глубокое эстетическое наслаждение.
					</p>
					<h3 className={styles.title}>
						Художественное литье — ремесло благородное. Убедитесь в этом сами!
					</h3>
				</div>
				<div className={styles.imageContainer}>
					{galleryImages.map(image => (
						<ImageCard key={image.id} product={image} className={styles.elem} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}
