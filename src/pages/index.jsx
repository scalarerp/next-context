import AppHeader from 'common/header'
import Aula from 'components/Aula'
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
        </div>
    )
}

export default index
