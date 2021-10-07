import { BellSvg, XSvg } from 'common/svgIcons'
import React from 'react'
import Slider from 'react-slick'

const Carousel = (props) => {
    const { cards } = props

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const TituloDaSecao = () => {
        return (
            <div className="flex flex-col items-center sm:items-stretch sm:flex-row justify-between ">
                <h1>Titulo da sção</h1>
                <div className="flex items-center">
                    <XSvg />
                    PraFrente
                    <BellSvg />
                    PraTras
                    {/* <Controls>
                        <PrevButton onClick={sliderRef?.slickPrev}>
                            <ChevronLeftIcon />
                        </PrevButton>
                        <NextButton onClick={sliderRef?.slickNext}>
                            <ChevronRightIcon />
                        </NextButton>
                    </Controls> */}
                </div>
            </div>
        )
    }

    return (
        <div className="relative" aria-labelledby="container">
            <div className="max-w-screen-xl mx-auto " aria-labelledby="content">
                <TituloDaSecao />
            </div>
            <Slider {...settings}>
                {cards.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className="h-full w-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none"
                            aria-labelledby="card"
                        >
                            {card.title}
                            <br />
                            {card.description}
                            <img src={card.imageSrc} alt="" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel
