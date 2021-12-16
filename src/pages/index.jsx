import React from 'react'

import Hero from 'components/herosection'
import Services from 'components/services'

import Gallery2 from 'components/gallery/gallery2'
import Gallery from 'components/gallery/gallery'

import { galleryImages } from 'galleries'

function Index() {
    return (
        <>
            <Hero />
            <Gallery2 galleryImages={galleryImages} />
            <Services />
            <Gallery />
        </>
    )
}

export default Index
