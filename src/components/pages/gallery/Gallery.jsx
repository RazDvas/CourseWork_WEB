import React, { useEffect, useState } from 'react'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { ImageCard } from '../../ImageCard/ImageCard'
import styles from './Gallery.module.css'

export function Gallery() {
	const [galleryImages, setGalleryImages] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [selectedImage, setSelectedImage] = useState(null)

	// Загрузка данных с API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/gallery')
				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных')
				}
				const data = await response.json()
				setGalleryImages(data)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	const openImage = image => {
		setSelectedImage(image)
	}

	const closeImage = () => {
		setSelectedImage(null)
	}

	if (loading) {
		return <div>Загрузка данных...</div>
	}

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<>
			<Header />
			<div className={styles.galleryContainer}>
				<div className={styles.container}>
					<h1 className={styles.title}>Галерея</h1>
					<div className={styles.preText}>
						<p>
							Зародившись много тысяч лет назад, искусство художественного литья
							и сегодня обретает новых поклонников, будоражит умы магией
							превращений металла, восхищает взоры прекрасными формами изделий.
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
							<div key={image.id} onClick={() => openImage(image)}>
								<ImageCard product={image} className={styles.elem} />
							</div>
						))}
					</div>
				</div>

				{/* Модальное окно для отображения изображения во весь размер */}
				{selectedImage && (
					<div className={styles.modalOverlay} onClick={closeImage}>
						<div className={styles.modalContent}>
							<img
								src={selectedImage.image_url}
								alt={selectedImage.description || 'Изображение галереи'}
								className={styles.fullSizeImage}
							/>
							{selectedImage.description && (
								<p className={styles.modalDescription}>
									{selectedImage.description}
								</p>
							)}
						</div>
					</div>
				)}
			</div>
			<Footer />
		</>
	)
}
