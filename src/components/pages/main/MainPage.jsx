import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { NavMenu } from '../../navMenu/NavMenu'
import { product } from '../../product'
import { ProductCard } from '../../productCard/productCard'
import styles from './MainPage.module.css'

export function MainPage({ mainPage }) {
	return (
		<div className={mainPage}>
			<div className={styles.page}>
				<Header />
				<NavMenu />
				<div className={styles.cupHolder}>Подстаканники</div>
				<div className={styles.content}>
					{product.map(product => (
						<ProductCard
							key={product.id}
							product={product}
							className={styles.elem}
						/>
					))}
				</div>
				<Footer />
			</div>
		</div>
	)
}
