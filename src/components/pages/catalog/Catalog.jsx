import { catalog } from '../../catalog'
import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { ProductCard } from '../../productCard/ProductCard'
import styles from './Catalog.module.css'

export function Catalog({ Catalog }) {
	return (
		<div className={Catalog}>
			<Header />
			<h1>Каталог</h1>
			<div className={styles.container}>
				{catalog.map(catalog => (
					<ProductCard
						key={catalog.id}
						product={catalog}
						className={styles.elem}
					/>
				))}
			</div>
			<Footer />
		</div>
	)
}
