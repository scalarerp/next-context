import SubLogo from 'common/svgIcons/SubLogo'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-blue-800 to-blue-500 flex items-center justify-between p-6 mt-10">
            <div>
                <SubLogo />
            </div>
            <p className="text-white font-semibold font-poppins">
                Alguns direitos reservados ©
            </p>
        </footer>
    )
}

export default Footer
