import Carousel from 'common/carousel'
import { cards } from 'database/cards'
import React from 'react'

const CarouselExample = () => {
    return <Carousel cards={cards} />
}

export default CarouselExample
