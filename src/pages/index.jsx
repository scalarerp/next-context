import React from 'react'

import Hero from 'components/herosection'
import Services from 'components/services'

import Gallery from 'components/gallery/gallery'

import Pricing from 'components/pricing'
import Rewiews from 'components/rewiews'
import Footer from 'common/footer'
import Header from 'common/header'
import { MotionInView, varFadeInUp } from 'components/animate'

function Index() {
    return (
        <>
            <Header />
            <MotionInView variants={varFadeInUp}>
                <Hero />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
                <Services />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
                <Gallery />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
                <Pricing />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
                <Rewiews />
            </MotionInView>

            <Footer />
        </>
    )
}

export default Index
