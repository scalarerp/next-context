import React from 'react'
import Img1 from 'assets/images/pic-1.png'
import Img2 from 'assets/images/pic-2.png'
import Img3 from 'assets/images/pic-3.png'

const Rewiews = () => {
    return (
        <div className="mt-10 bg-gradient-inverse pt-8">
            <div className="flex justify-center font-poppins sm:text-3xl text-2xl font-medium title-font mt-8 text-brand">
                <h1>Nosso time</h1>
                {/* <pre>{JSON.stringify(imageList2, null, 2)}</pre> */}
            </div>
            <section className="text-inverse body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-around">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 max-w-xs">
                            <div className="h-full lg:text-right text-center">
                                <div className="flex lg:justify-between lg:text-right text-center justify-center">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block "
                                        src={Img1.src}
                                    />
                                    <div className=" lg:ml-0 ml-8">
                                        <div>
                                            <h2 className="text-secondary font-medium title-font tracking-wider text-sm">
                                                HOLDEN CAULFIELD
                                            </h2>
                                        </div>
                                        <div>
                                            <p className="text-inverse">
                                                Senior Product Designer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="leading-relaxed font-poppins">
                                    Edison bulb retro cloud bread echo park,
                                    helvetica stumptown taiyaki taxidermy 90s
                                    cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag
                                    drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-brand mt-6 mb-4"></span>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 max-w-xs">
                            <div className="h-full lg:text-right text-center">
                                <div className="flex lg:justify-between lg:text-right text-center justify-center">
                                    <img
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block "
                                        src={Img2.src}
                                        alt="testimonial"
                                    />
                                    <div className="lg:ml-0 ml-8">
                                        <h2 className="text-secondary font-medium title-font tracking-wider text-sm">
                                            ALPER KAMU
                                        </h2>
                                        <p className="text-inverse">
                                            UI Develeoper
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-relaxed font-poppins">
                                    Edison bulb retro cloud bread echo park,
                                    helvetica stumptown taiyaki taxidermy 90's
                                    cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag
                                    drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-brand mt-6 mb-4"></span>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4 max-w-xs">
                            <div className="h-full lg:text-right text-center">
                                <div className="flex lg:justify-between lg:text-right text-center justify-center">
                                    <img
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block "
                                        src={Img3.src}
                                    />
                                    <div className="lg:ml-0 ml-8">
                                        <h2 className="text-secondary font-medium title-font tracking-wider text-sm">
                                            HENRY LETHAM
                                        </h2>
                                        <p className="text-inverse">CTO</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed font-poppins">
                                    Edison bulb retro cloud bread echo park,
                                    helvetica stumptown taiyaki taxidermy 90's
                                    cronut +1 kinfolk. Single-origin coffee
                                    ennui shaman taiyaki vape DIY tote bag
                                    drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-brand mt-6 mb-4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Rewiews
