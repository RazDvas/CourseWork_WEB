import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import { YandexMapComponent } from '../../yandexMapComponent/YandexMapComponent'
import styles from './Contact.module.css'

export function Contact({ Contact }) {
	return (
		<div className={Contact}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Контакты</h1>
				<div className={styles.information}>
					<YandexMapComponent className={styles.map} />
					<p className={styles.text}>kuznyapervachka@yandex.ru</p>
					<p className={styles.text}>+7 (XXX) XXX-XX-XX</p>
				</div>
				<h3 className={styles.title}>Общие сведения</h3>
				<div className={styles.information}></div>
				<h3 className={styles.title}>Наименование</h3>
				<div className={styles.information}></div>
				<h3 className={styles.title}>ИФНС отчётности</h3>
				<div className={styles.information}></div>
			</div>
			<Footer />
		</div>
	)
}
