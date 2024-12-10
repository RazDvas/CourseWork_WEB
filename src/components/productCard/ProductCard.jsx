import { useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import styles from './productCard.module.css'

export function ProductCard({ productCard, product }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className={productCard}>
			<div onClick={() => setIsModalOpen(true)} className={styles.container}>
				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={product.image}
						alt={`Image for product with id: ${product.id}`}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>{product.title}</div>

					<div className={styles.foot}>
						<div className={styles.price}>{product.price}</div>
						<div className={styles.add}>
							<BsCartPlus size={30} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
