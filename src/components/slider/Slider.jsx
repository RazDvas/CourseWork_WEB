import React, { useState } from 'react'
import styles from './Slider.module.css'

export function Slider({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === images.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className={styles.slider}>
			<div
				className={styles.sliderContent}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Slide ${index}`}
						className={styles.slide}
					/>
				))}
			</div>
			<button className={styles.leftArrow} onClick={goToPrevious}>
				❮
			</button>
			<button className={styles.rightArrow} onClick={goToNext}>
				❯
			</button>
		</div>
	)
}
