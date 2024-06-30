import React, { useEffect, useState } from 'react';
import './gallery.css';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import gallery01 from '../../images/gallery01.png'
import gallery02 from '../../images/gallery02.jpg'
import gallery03 from '../../images/gallery03.jpg'
import gallery04 from '../../images/gallery04.jpg'
import gallery05 from '../../images/gallery05.jpg'
import gallery06 from '../../images/gallery06.jpg'
import gallery07 from '../../images/gallery07.jpg'
import gallery08 from '../../images/gallery08.jpg'
import gallery09 from '../../images/gallery09.jpg'
import gallery10 from '../../images/gallery10.jpg'
import { ReviewCard } from '../../componentes';
import reviews from '../../files/reviews'


const Gallery = () => {

    const size = 40

    const images = [
        { src: gallery01 },
        { src: gallery02 },
        { src: gallery03 },
        { src: gallery04 },
        { src: gallery05 },
        { src: gallery06 },
        { src: gallery07 },
        { src: gallery08 },
        { src: gallery09 },
        { src: gallery10 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='gallery' className='bc__gallery section__padding'>
            <div className='bc__gallery-heading'>
                <h1>Especialistas em Ação!</h1>
            </div>
            <div className='bc__gallery-container'>
                <div className="bc__gallery-photos">
                    <button><p onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}><IoMdArrowDropleftCircle size={size} /></p></button>
                    {images.map((image, index) => (
                        <div className='bc__gallery-photos_photo' key={index}>
                            {index === currentIndex && (
                                <img src={image.src} alt={`Imagem ${index + 1}`} />
                            )}
                        </div>
                    ))}
                    <button><p onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}><IoMdArrowDroprightCircle size={size} /></p></button>
                </div>
                <div id='reviews' className="bc__gallery-reviews">
                    {reviews.map((item, i) => {
                        return (
                            <ReviewCard
                                key={i}
                                photo={item.photo}
                                name={item.name}
                                review={item.review}
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    );
};

export default Gallery;
