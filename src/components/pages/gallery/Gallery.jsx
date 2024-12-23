import { Footer } from '../../footer/Footer'
import { galleryImages } from '../../galleryImages'
import { Header } from '../../header/Header'
import { ImageCard } from '../../imageCard/ImageCard'
import styles from './Gallery.module.css'

export function Gallery({ Gallery }) {
	return (
		<div className={Gallery}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Галерея</h1>
				<div className={styles.preText}>
					<p>
						Зародившись много тысяч лет назад, искусство художественного литья и
						сегодня обретает новых поклонников, будоражит умы магией превращений
						металла, восхищает взоры прекрасными формами изделий.
					</p>
					<p>
						В России художественное литьё всегда пользовалось неизменным
						успехом. Литейщики, вдохновлённые опытом старых мастеров,
						совершенствуют технологии и создают новые творения, которые дарят
						людям глубокое эстетическое наслаждение.
					</p>
					<h3 className={styles.title}>
						Художественное литье — ремесло благородное. Убедитесь в этом сами!
					</h3>
				</div>
				<div className={styles.imageContainer}>
					{galleryImages.map(galleryImages => (
						<ImageCard
							key={galleryImages.id}
							product={galleryImages}
							className={styles.elem}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}
