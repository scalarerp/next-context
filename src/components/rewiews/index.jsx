import React from 'react'
import Img1 from 'assets/images/pic-1.png'
import Img2 from 'assets/images/pic-2.png'
import Img3 from 'assets/images/pic-3.png'
import ImageAvatar from 'components/imageAvatar'

const Rewiews = () => {
    return (
        <div className="mt-24  pt-8">
            <section className="text-inverse  bg-gradient-inverse">
                <div className="container px-5 py-20  mx-auto">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
                        <div className=" xl:transform xl:-translate-y-40 xl:-mb-32 mb-32 px-12  py-8 lg:max-w-sm bg-inverse-opacity rounded-md">
                            <div className="h-full lg:text-right text-center">
                                <div className="flex lg:justify-between lg:text-right text-center justify-center">
                                    <ImageAvatar
                                        alt="testimonial"
                                        className="w-20 h-20  object-cover object-center rounded-full inline-block "
                                        image={Img1}
                                    />
                                    <div className=" lg:ml-0 ml-8">
                                        <div>
                                            <h2 className="text-brand-inverse font-medium title-font tracking-wider text-sm">
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
                                <p className="leading-relaxed font-poppins mt-4">
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
                        <div className=" xl:transform xl:-translate-y-28 xl:-mb-32 mb-32 px-12  py-8 lg:max-w-sm bg-inverse-opacity rounded-md">
                            <div className="h-full lg:text-right text-center">
                                <div className="flex lg:justify-between lg:text-right text-center justify-center">
                                    <ImageAvatar
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block "
                                        image={Img2}
                                        alt="testimonial"
                                    />
                                    <div className="lg:ml-0 ml-8">
                                        <h2 className="text-brand-inverse font-medium title-font tracking-wider text-sm">
                                            ALPER KAMU
                                        </h2>
                                        <p className="text-inverse">
                                            UI Develeoper
                                        </p>
                                    </div>
                                </div>
                                <p className="leading-relaxed font-poppins mt-4">
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
                        <div className=" xl:-mb-32 px-12  xl:transform xl:-translate-y-40 py-8 lg:max-w-sm bg-inverse-opacity rounded-md">
                            <div className="h-full lg:text-right text-center">
                                <div className="flex lg:justify-between lg:text-right text-center justify-center">
                                    <ImageAvatar
                                        alt="testimonial"
                                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block "
                                        image={Img3}
                                    />
                                    <div className="lg:ml-0 ml-8">
                                        <h2 className="text-brand font-medium title-font tracking-wider text-sm">
                                            HENRY LETHAM
                                        </h2>
                                        <p className="text-inverse">CTO</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed font-poppins mt-4">
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Rewiews
