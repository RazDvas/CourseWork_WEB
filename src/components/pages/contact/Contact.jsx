import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './Contact.module.css'

export function Contact({ Contact }) {
	return (
		<div className={Contact}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Контакты</h1>
				{/* <YandexMapComponent className={styles.map} /> */}
				<div className={styles.informationBlock}>
					<p className={styles.informationText}>kuznyapervachka@yandex.ru</p>
					<p className={styles.informationText}>+7 (XXX) XXX-XX-XX</p>
				</div>
				<h2 className={styles.title}>Общие сведения</h2>
				<div className={styles.informationBlock}>
					<p className={styles.informationText}>
						Наименование компании — ИП Иванов Иван Иванович
					</p>
					<p className={styles.informationText}>
						Адрес — 606167, Нижегородская обл, Вачский р-н, деревня Звягино
						(Казаковский с/с), ул. Совхозаня, д.31
					</p>
					<p className={styles.informationText}>
						Тип организации — Индивидуальный предприниматель
					</p>
					<p className={styles.informationText}>
						Гражданство ИП — Российская Федерация
					</p>
					<p className={styles.informationText}>ИНН — 5208********</p>
					<p className={styles.informationText}>ОГРН — 313************</p>
					<p className={styles.informationText}>Код ОКВЭД — 25.**</p>
				</div>
				<h2 className={styles.title}>Наименование</h2>
				<div className={styles.informationBlock}>
					<p className={styles.informationText}>
						Полное наименование с ОПФ — Индивидуальный предприниматель Иванов
						Иван Иванович
					</p>
					<p className={styles.informationText}>
						Краткое наименование с ОПФ — ИП Иванов Иван Иванович
					</p>
					<p className={styles.informationText}>
						Полное наименование — Иванов Иван Иванович
					</p>
				</div>
				<h2 className={styles.title}>ИФНС отчётности</h2>
				<div className={styles.informationBlock}>
					<p className={styles.informationText}>Код отделения — 5252</p>
					<p className={styles.informationText}>
						Наименование отделения — Межрайонная инспекция Федеральной налоговой
						службы № 7 по Нижегородской области
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}
