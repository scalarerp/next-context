import SurfBoardSvg from 'common/svgIcons/SurfBoardSvg'
import React from 'react'

const Pricing = () => {
    return (
        <section className="mt-0 lg:mt-64">
            <div className="flex justify-center mt-16">
                <h1 className="font-poppins text-5xl font-bold text-[#3b82f6]">
                    Aulas
                </h1>
            </div>
            <div className=" grid grid-cols-3">
                <div>
                    <div>
                        <SurfBoardSvg />
                    </div>
                </div>
                <div>
                    <div>
                        <SurfBoardSvg />
                    </div>
                </div>
                <div>
                    <div>
                        <SurfBoardSvg />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
