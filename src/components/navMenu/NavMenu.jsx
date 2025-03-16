import { PiBasketFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { NavButton } from '../navButton/NavButton'
import styles from './NavMenu.module.css'

export function NavMenu({ navMenu }) {
	return (
		<div className={navMenu}>
			<div className={styles.container}>
				<div className={styles.list_product}>
					<NavButton targetId='section1' className={styles.product_item}>
						Подарочные ножи
					</NavButton>
					<NavButton targetId='section2' className={styles.product_item}>
						Шампура
					</NavButton>
					<NavButton targetId='section3' className={styles.product_item}>
						Зажигалки
					</NavButton>
					<NavButton targetId='section4' className={styles.product_item}>
						Портсигары
					</NavButton>
					<NavButton targetId='section5' className={styles.product_item}>
						Подстаканники
					</NavButton>
					<NavButton targetId='section6' className={styles.product_item}>
						Сувениры
					</NavButton>
					<Link to={'/bascet'} className={styles.product_item}>
						<PiBasketFill size={23} className={styles.bascetItem} />
					</Link>
				</div>
			</div>
		</div>
	)
}
