import { Footer } from '../../footer/Footer'
import { Header } from '../../header/Header'
import styles from './AboutUs.module.css'

export function AboutUs({ AboutUS }) {
	return (
		<div className={AboutUS}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>О нас</h1>
				<div className={styles.information}>
					<h2 className={styles.titleAboutUs}>Расскажу о своей мастерской</h2>
					<p className={styles.textAboutUs}>
						Меня звут Иван Иванов, я являюсь владельцем небольшой мастерской
						художественного литья из латуни.
					</p>
					<p className={styles.textAboutUs}>
						В ней мы с товарищами творим настоящее волшебство! Мы изготавливаем
						большой ассортимент сувенирной продукции, от чайных приборов до
						коллекционных бокалов на любой вкус!
					</p>
					<p className={styles.textAboutUs}>
						Я уверен что вы найдете в моем магазине вещь, в которую влюбитесь и
						будете любоваться ей не один год!
					</p>
					<p className={styles.textAboutUs}>
						Я надеюсь, что мы станем для тебя не просто магазином, но и верным
						другом!
					</p>
					<p className={styles.textAboutUs}>
						Моя мастерская находится в деревне звягино в Нижегородской области,
						Вачский район. В ней работают мастера ювелирной филиграни, что
						улучшает качество литейной продукции.
					</p>
					<p className={styles.textAboutUs}>
						В нашем крае очень развита металлообработка, и мастерство передаётся
						из поколения в поколение. Художественное литье из латуни — это
						превращение фантазии художника в отливаемые изделия, что делает их
						эксклюзивными и неповторимыми!
					</p>
					<p className={styles.textAboutUs}>
						Мы открыты для сотрудничества с розничными магазинами, прайс для
						оптовых цен высылается лично.
					</p>
					<h2>Взгляните на то, как мы работаем</h2>
					<div className={styles.videoContainer}>
						<div>"тут должны быть видео"</div>
					</div>
					<h3 className={styles.textAboutUs}>
						Так же вы можете посмотреть нашу галлерею прямо на сайте!
					</h3>
				</div>
			</div>
			<Footer />
		</div>
	)
}
