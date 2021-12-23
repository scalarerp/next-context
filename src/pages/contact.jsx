import Footer from 'common/footer'
import Header from 'common/header'
import AppForm from 'components/Contact'
import Services from 'components/services'
import React from 'react'

const contact = () => {
    return (
        <div>
            <Header />
            <AppForm />
            <Services />
            <Footer />
        </div>
    )
}

export default contact
