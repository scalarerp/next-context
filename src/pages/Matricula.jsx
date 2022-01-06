import Footer from 'common/footer'
import FormSubmit from 'common/Form'
import AppHeader from 'common/header'
import FormMatricula from 'components/formmatricula'
import React from 'react'

const Matricula = () => {
    return (
        <div>
            <AppHeader />
            <FormMatricula />
            <FormSubmit />
            <Footer />
        </div>
    )
}

export default Matricula
