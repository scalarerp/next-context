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

const Galery = () => {
    return (
        <div>
            <div className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-8 text-brand">
                <h1>Nosso Trabalho</h1>
            </div>
            <section className=" lg:columns-3 md:columns-2 gap-3 xl:w-[1200px] mx-auto  space-y-3 pb-28">
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work1.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work2.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work3.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work4.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work5.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work6.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work7.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work8.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
                <div className="transform hover:scale-95 duration-300">
                    <img
                        src={Work9.src}
                        alt="work"
                        className="rounded-md transform hover:opacity-80 "
                    />
                </div>
            </section>
        </div>
    )
}

export default Galery
