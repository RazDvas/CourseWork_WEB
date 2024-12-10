import { PiBasketFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import styles from './NavMenu.module.css'

export function NavMenu({ navMenu }) {
	return (
		<div className={navMenu}>
			<div className={styles.container}>
				<div className={styles.search_product}>
					<h3 className={styles.search}>Поле поиска</h3>
					<input type='text' className={styles.input} />
					<span class='focus-border' />
				</div>
				<div className={styles.list_product}>
					<Link to={'#'} className={styles.product_item}>
						Ножи подарочные
					</Link>
					<Link to={'#'} className={styles.product_item}>
						Шампура
					</Link>
					<Link to={'#'} className={styles.product_item}>
						Зажигалки
					</Link>
					<Link to={'#'} className={styles.product_item}>
						Портсигары
					</Link>
					<Link to={'#'} className={styles.product_item}>
						Подстаканники
					</Link>
					<Link to={'#'} className={styles.product_item}>
						Сувениры
					</Link>
					<Link to={'/bascet'} className={styles.product_item}>
						<PiBasketFill size={23} className={styles.bascetItem} />
					</Link>
				</div>
			</div>
		</div>
	)
}
