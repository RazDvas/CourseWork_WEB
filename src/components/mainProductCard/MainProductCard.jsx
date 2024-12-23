import {
	producCigaretteCases,
	producSouvenirs,
	productCupHolder,
	productKnife,
	productLighter,
	productSkewers,
} from '../product'
import { ProductCard } from '../productCard/ProductCard'
import styles from './MainProductCard.module.css'

export function MainProductCard({}) {
	return (
		<div className={MainProductCard}>
			<div className={styles.container}>
				<h2 className={styles.cupHolder}>Ножи подарочные</h2>
				<div className={styles.content}>
					{productKnife.map(productKnife => (
						<ProductCard
							key={productKnife.id}
							product={productKnife}
							className={styles.elem}
						/>
					))}
				</div>
				<h2 className={styles.cupHolder}>Шампура</h2>
				<div className={styles.content}>
					{productSkewers.map(productSkewers => (
						<ProductCard
							key={productSkewers.id}
							product={productSkewers}
							className={styles.elem}
						/>
					))}
				</div>
				<h2 className={styles.cupHolder}>Зажигалки</h2>
				<div className={styles.content}>
					{productLighter.map(productLighter => (
						<ProductCard
							key={productLighter.id}
							product={productLighter}
							className={styles.elem}
						/>
					))}
				</div>
				<h2 className={styles.cupHolder}>Портсигары</h2>
				<div className={styles.content}>
					{producCigaretteCases.map(producCigaretteCases => (
						<ProductCard
							key={producCigaretteCases.id}
							product={producCigaretteCases}
							className={styles.elem}
						/>
					))}
				</div>
				<h2 className={styles.cupHolder}>Подстаканники</h2>
				<div className={styles.content}>
					{productCupHolder.map(productCupHolder => (
						<ProductCard
							key={productCupHolder.id}
							product={productCupHolder}
							className={styles.elem}
						/>
					))}
				</div>
				<h2 className={styles.cupHolder}>Сувениры</h2>
				<div className={styles.content}>
					{producSouvenirs.map(producSouvenirs => (
						<ProductCard
							key={producSouvenirs.id}
							product={producSouvenirs}
							className={styles.elem}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
