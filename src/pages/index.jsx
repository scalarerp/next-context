import FormSubmit from 'common/Form'
import AppHeader from 'common/header'
import Aula from 'components/Aula'
import Blockquote from 'components/blockquote'
import Intro from 'components/Intro'
import Pricing from 'components/Pricing'
import React from 'react'

const index = () => {
    return (
        <div>
            <AppHeader />
            <Intro />
            <Aula />
            <Pricing />
            <Blockquote />
            <FormSubmit />
        </div>
    )
}

export default index
