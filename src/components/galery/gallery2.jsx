import React from 'react'

import Image from 'next/image'
import { galleryImages } from 'galleries'

const Gallery2 = () => {
    return (
        <div>
            <h1>Gallery2</h1>
            <section className=" p-5 relative  text-justify columns-1 sm:columns-2 lg:columns-3 ">
                {galleryImages.map((item, index) => {
                    return (
                        <div
                            className="transform hover:scale-95 duration-300 "
                            key={index}
                        >
                            <Image
                                className="object-cover w-80 h-40  rounded-lg shadow-xl"
                                src={item.image.src}
                                alt="index"
                                layout="responsive"
                                width={800} //===w-80
                                height={400} //===w-40
                                // objectFit="none"
                                objectFit="cover"
                            />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Gallery2
