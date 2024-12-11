import { FaRegCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo.jsx'
import styles from './Header.module.css'

export function Header({ head }) {
	return (
		<div className={head}>
			<header className={styles.header}>
				<Logo />
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.elem}>
							<Link to={'/'} className={styles.Link}>
								Главная
							</Link>
						</li>
						<li className={styles.elem}>
							<Link to={'/aboutUs'} className={styles.Link}>
								О нас
							</Link>
						</li>
						<li className={styles.elem}>
							<Link to={'/catalog'} className={styles.Link}>
								Каталог
							</Link>
						</li>
						<li className={styles.elem}>
							<Link to={'/paymentAndDelivery'} className={styles.Link}>
								Оплата и доставка
							</Link>
						</li>
						<li className={styles.elem}>
							<Link to={'/gallery'} className={styles.Link}>
								Фотогалерея
							</Link>
						</li>
						<li className={styles.elem}>
							<Link to={'/contact'} className={styles.Link}>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.action}>
					<Link to={'#'} className={styles.Link}>
						+7 (XXX) XXX-XX-XX
					</Link>
					<Link to={'#'} className={styles.Link}>
						<FaRegCircleUser size={20} />
					</Link>
				</div>
			</header>
		</div>
	)
}
