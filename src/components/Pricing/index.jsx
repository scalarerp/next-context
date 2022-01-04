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
            <div className="flex justify-center">
                <div className=" grid xl:grid-cols-3 lg:grid-cols-2 mt-10">
                    <div className="px-40 ml-10 relative  py-10 shadow-lg shadow-black">
                        <div className="absolute -top-4 left-32">
                            <SurfBoardSvg />
                        </div>
                        <h1 className="bg-white  font-poppins text-3xl">
                            Infantil
                        </h1>
                    </div>
                    <div className="px-40 ml-10 relative lg:mt-0 mt-20 py-10 shadow-lg shadow-black">
                        <div className="absolute -top-4 left-32">
                            <SurfBoardSvg />
                        </div>
                    </div>
                    <div className="px-40 ml-10 relative xl:mt-0 mt-20 py-10 shadow-lg shadow-black">
                        <div className="absolute -top-4 left-32">
                            <SurfBoardSvg />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
