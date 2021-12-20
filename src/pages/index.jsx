import React from 'react'

import Hero from 'components/herosection'
import Services from 'components/services'

import Gallery from 'components/gallery/gallery'

import Pricing from 'components/pricing'
import Rewiews from 'components/rewiews'
import Footer from 'common/footer'
import Header from 'common/header'

function Index() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Gallery />
            <Pricing />
            <Rewiews />
            <Footer />
        </>
    )
}

export default Index
