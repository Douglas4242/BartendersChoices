import React from 'react'
import style from './Gallery.module.css'
import ImageSlider from '../elements/ImageSlider'

const Gallery = () => {
    const slides = [
        { url: 'https://meeventos.com.br/fotos/srt_50b836494de4cb1c36ea5b85e593b746.png', title: 'img1' },
        { url: 'https://quetzalli.com.br/cdn/shop/articles/admin-ajax_1.jpg?v=1655502403', title: 'img2' },
        { url: 'https://abrasel.com.br/revista/site/assets/files/2735/expectativdas_setor_2024.749x0-is.jpg', title: 'img3' },
        { url: 'https://www.channel360.com.br/wp-content/uploads/2022/08/cerveja-artesanal-441x276.png', title: 'img4' },
        { url: 'https://cisa.org.br/media/k2/items/cache/4739b6c64144f72975550c5e8df1b948_Generic.jpg', title: 'img5' },
        { url: 'https://img.freepik.com/fotos-gratis/barman-especialista-esta-fazendo-um-cocktail-na-boate_155003-12629.jpg?w=1800&t=st=1715560014~exp=1715560614~hmac=db28b0565f2dfbf8477a824917fae1ddd30007e198acf869bc58a94c8d0ba091', title: 'img6' }
    ]


    return (
        <div id='Gallery' className={style.Gallery}>
            <h1>Nossos profissionais em ação!</h1>
            <div className={style.GalleryContainer}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}

export default Gallery
