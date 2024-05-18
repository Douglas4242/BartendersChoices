import React, { useState } from 'react'
import style from './ImageSlider.module.css'

const ImageSlider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? (slides.length - 1) : (currentIndex - 1)
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className={style.ImageSlider}>
            <div onClick={goToPrevious} className={style.leftArrow}>⮜</div>
            <div onClick={goToNext} className={style.rightArrow}>⮞</div>
            <div className={style.ImageSliderSub} style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
            <div className={style.dotsContainer}>
                {slides.map((slide, slideIndex) => (
                    <div onClick={() => goToSlide(slideIndex)} className={style.dots} key={slideIndex}>•</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider
