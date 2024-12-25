import {
	producCigaretteCases,
	producSouvenirs,
	productCupHolder,
	productKnife,
	productLighter,
	productSkewers,
} from '../product'
import { ProductCard } from '../productCard/ProductCard'
import { Section } from '../section/Section'
import styles from './MainProductCard.module.css'

export function MainProductCard({}) {
	return (
		<div className={MainProductCard}>
			<div className={styles.container}>
				<Section id='section1' className={styles.cupHolder}>
					Подарочные ножи
				</Section>
				<div className={styles.content}>
					{productKnife.map(productKnife => (
						<ProductCard
							key={productKnife.id}
							product={productKnife}
							className={styles.elem}
						/>
					))}
				</div>
				<Section id='section2' className={styles.cupHolder}>
					Шампура
				</Section>
				<div className={styles.content}>
					{productSkewers.map(productSkewers => (
						<ProductCard
							key={productSkewers.id}
							product={productSkewers}
							className={styles.elem}
						/>
					))}
				</div>
				<Section id='section3' className={styles.cupHolder}>
					Зажигалки
				</Section>
				<div className={styles.content}>
					{productLighter.map(productLighter => (
						<ProductCard
							key={productLighter.id}
							product={productLighter}
							className={styles.elem}
						/>
					))}
				</div>
				<Section id='section4' className={styles.cupHolder}>
					Портсигары
				</Section>
				<div className={styles.content}>
					{producCigaretteCases.map(producCigaretteCases => (
						<ProductCard
							key={producCigaretteCases.id}
							product={producCigaretteCases}
							className={styles.elem}
						/>
					))}
				</div>
				<Section id='section5' className={styles.cupHolder}>
					Подстаканники
				</Section>
				<div className={styles.content}>
					{productCupHolder.map(productCupHolder => (
						<ProductCard
							key={productCupHolder.id}
							product={productCupHolder}
							className={styles.elem}
						/>
					))}
				</div>
				<Section id='section6' className={styles.cupHolder}>
					Сувениры
				</Section>
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
