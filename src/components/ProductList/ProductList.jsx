import React from 'react'
import { ProductCard } from '../productCard/ProductCard'
import styles from './ProductList.module.css'

export function ProductList({ products }) {
	return (
		<div className={styles.productList}>
			{products.map(product => (
				<ProductCard key={product.product_id} product={product} />
			))}
		</div>
	)
}
