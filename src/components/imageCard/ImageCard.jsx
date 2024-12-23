import { useState } from 'react'
import styles from './ImageCard.module.css'

export function ImageCard({ ImageCard, product }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className={ImageCard}>
			<div onClick={() => setIsModalOpen(true)} className={styles.container}>
				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={product.image}
						alt={`Image for product with id: ${product.id}`}
					/>
				</div>
			</div>
		</div>
	)
}
