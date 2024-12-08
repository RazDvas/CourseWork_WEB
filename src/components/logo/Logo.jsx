import logo from '../../assets/logo.png'
import styles from './Logo.module.css'

export function Logo({ className }) {
	return (
		<div className={className}>
			<div className={styles.logo}>
				<img className={styles.logo_png} src={logo} alt='logo' />
				<h2 className={styles.logo_name}>Кузня первачка</h2>
			</div>
		</div>
	)
}
