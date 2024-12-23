import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import styles from './YandexMapComponent.module.css'

const mapState = {
	center: [55.7558, 37.6173],
	zoom: 10,
}

export function YandexMapComponent({ className }) {
	return (
		<div className={className}>
			<YMaps>
				<Map
					className={styles.map}
					state={mapState}
					width='100%'
					height='400px'
				>
					<Placemark geometry={[55.7558, 37.6173]} />
				</Map>
			</YMaps>
		</div>
	)
}
