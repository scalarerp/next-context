import Galery from 'components/galery'
import Gallery from 'components/galery/gallery'
import Hero from 'components/herosection'
import Services from 'components/services'
import React from 'react'

function Index() {
    return (
        <>
            <Hero />
            <Services />
            <Galery />
            <Gallery />
        </>
    )
}

export default Index
