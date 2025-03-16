import React from 'react'
import styles from './ImageCard.module.css'

export function ImageCard({ product, className }) {
	return (
		<div className={`${styles.imageCard} ${className}`}>
			<img
				src={product.image_url}
				alt={product.description || 'Изображение галереи'}
				className={styles.image}
			/>
			{product.description && (
				<p className={styles.description}>{product.description}</p>
			)}
		</div>
	)
}
