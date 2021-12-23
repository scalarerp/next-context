import React from 'react'
import Work1 from 'assets/images/work1.png'
import Work2 from 'assets/images/work-2.png'
import Work3 from 'assets/images/work-3.png'
import Work4 from 'assets/images/work-4.png'
import Work5 from 'assets/images/work-5.png'
import Work6 from 'assets/images/work-6.png'
import Work7 from 'assets/images/work-7.jpg'
import Work8 from 'assets/images/work-8.jpg'
import Work9 from 'assets/images/work-9.jpg'

import ImageFit from 'components/imageFit/imageFit'

const Galery = () => {
    return (
        <div>
            <div className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-8 text-brand">
                <h1>Nosso Trabalho</h1>
            </div>
            <section className=" lg:columns-3 md:columns-2 gap-3 xl:w-[1200px] mx-auto  space-y-3 pb-28">
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        image={Work1}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        image={Work2}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        src={Work3}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        image={Work4}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        src={Work5}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        src={Work6}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        src={Work7}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        src={Work8}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <ImageFit
                        src={Work9}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
            </section>
        </div>
    )
}

export default Galery
