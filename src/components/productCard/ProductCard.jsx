import React, { useState } from 'react'
import styles from './productCard.module.css'

export function ProductCard({ product, className }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const handleAddToCart = () => {
		console.log('Товар добавлен в корзину:', product.name)
	}

	return (
		<div className={`${styles.productCard} ${className}`}>
			<div onClick={toggleModal} className={styles.container}>
				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={product.image_url}
						alt={`Изображение товара: ${product.name}`}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>{product.name}</div>
					<div className={styles.description}>{product.description}</div>
					<div className={styles.material}>Материал: {product.material}</div>
					<div className={styles.foot}>
						<div className={styles.price}>{product.price} руб.</div>
						<button
							className={styles.addToCartButton}
							onClick={e => {
								e.stopPropagation()
								handleAddToCart()
							}}
						>
							Добавить в корзину
						</button>
					</div>
				</div>
			</div>

			{isModalOpen && (
				<div className={styles.modalOverlay} onClick={toggleModal}>
					<div
						className={styles.modalContent}
						onClick={e => e.stopPropagation()}
					>
						<h2>{product.name}</h2>
						<img
							className={styles.modalImage}
							src={product.image_url}
							alt={`Изображение товара: ${product.name}`}
						/>
						<p>{product.description}</p>
						<p>
							<strong>Материал:</strong> {product.material}
						</p>
						<p>
							<strong>Цена:</strong> {product.price} руб.
						</p>
						<button
							className={styles.addToCartButton}
							onClick={handleAddToCart}
						>
							Добавить в корзину
						</button>
						<button className={styles.closeButton} onClick={toggleModal}>
							Закрыть
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
