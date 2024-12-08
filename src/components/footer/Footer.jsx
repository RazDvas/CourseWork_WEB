import { FaTelegram, FaVk, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo.jsx'
import styles from './Footer.module.css'

export function Footer({ className }) {
	return (
		<div className={className}>
			<footer className={styles.container}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<div className={styles.widget_box}>
					<h2 className={styles.widget_title}>Меню</h2>
					<Link to='#' className={styles.widget_link}>
						Главная
					</Link>
					<Link to='#' className={styles.widget_link}>
						О нас
					</Link>
					<Link to='#' className={styles.widget_link}>
						Каталог
					</Link>
					<Link to='#' className={styles.widget_link}>
						Фотогалерея
					</Link>
					<Link to='#' className={styles.widget_link}>
						Оплата и доставка
					</Link>
					<Link to='#' className={styles.widget_link}>
						Контакты
					</Link>
				</div>
				<div className={styles.widget_box}>
					<h2 className={styles.widget_title}>Кузня первака</h2>
					<p className={styles.widget_text}>© Все права защищены.</p>
					<p className={styles.widget_text}>kuznyapervachka@yandex.ru</p>
					<p className={styles.widget_text}>
						606167, Нижегородская обл, Вачский р-н, деревня Звягино (Казаковский
						с/с), ул. Молодежная, д.1А
					</p>
				</div>
				<div className={styles.widget_box}>
					<h2 className={styles.widget_title}>Мы в соцсетях</h2>
					<Link
						to='https://t.me/kuznyapervachka'
						className={styles.widget_link_icon}
					>
						<FaTelegram size={30} />
					</Link>
					<Link to='#' className={styles.widget_link_icon}>
						<FaYoutube size={30} />
					</Link>
					<Link to='#' className={styles.widget_link_icon}>
						<FaVk size={30} />
					</Link>
				</div>
			</footer>
		</div>
	)
}
