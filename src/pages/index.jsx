import Galery from 'components/galery'
import Gallery from 'components/galery/gallery'
import Gallery2 from 'components/galery/gallery2'
import Hero from 'components/herosection'
import Services from 'components/services'
import React from 'react'

function Index() {
    return (
        <>
            <Hero />

            <Services />
            <Galery />
            <Gallery2 />
            <Gallery />
        </>
    )
}

export default Index
