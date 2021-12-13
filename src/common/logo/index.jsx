import Link from 'next/link'
import React from 'react'
import { FaSearchDollar } from 'react-icons/fa'

const AppLogo = () => {
    return (
        <div className={`logo flex items-center text-4xl`}>
            <Link href="/">
                <a className="flex">
                    se
                    <div className="text-brand">
                        <FaSearchDollar />
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default AppLogo
