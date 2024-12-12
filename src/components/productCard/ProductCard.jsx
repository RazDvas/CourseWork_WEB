import { useState } from 'react'
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
						{/* <div className={styles.add}>
							<Counter className={styles.backetButton} />
							<Link to={'#'} className={styles.backetButton}>
								<BsCartPlus size={30} />
							</Link>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
