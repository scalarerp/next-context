import React from 'react'
import { FaSearchDollar } from 'react-icons/fa'

const AppLogo = () => {
    return (
        <a href="#" className={`logo flex items-center text-4xl`}>
            se
            <div className="text-brand">
                <FaSearchDollar />
            </div>
        </a>
    )
}

export default AppLogo
