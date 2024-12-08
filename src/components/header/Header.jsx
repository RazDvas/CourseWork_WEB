import { Link } from 'react-router-dom'
import styles from '../header/Header.module.css'
import { Logo } from '../logo/Logo.jsx'

export function Header({ className }) {
	return (
		<div className={className}>
			<header className={styles.header}>
				<Logo />
				<nav className={styles.nav}>
					<Link to={''}>Главная</Link>
					<Link to={''}>О нас</Link>
					<Link to={''}>Каталог</Link>
					<Link to={''}>Оплата и доставка</Link>
					<Link to={''}>Отзывы</Link>
					<Link to={''}>Контакты</Link>
				</nav>
				<div className={styles.action}>
					<Link to={'#'} className={styles.phone}>
						+7 (XXX) XXX-XX-XX
					</Link>
					<Link to={'#'} className={styles.card}>
						Корзина
					</Link>
				</div>
			</header>
		</div>
	)
}
