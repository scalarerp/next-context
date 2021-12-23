import React from 'react'

import { galleryImages } from 'galleries'
import ImageFit from 'components/imageFit'

const Gallery = () => {
    return (
        <div className="pt-8 pb-8">
            <div className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-8 text-brand">
                <h1>Nosso Trabalho</h1>
                {/* <pre>{JSON.stringify(imageList2, null, 2)}</pre> */}
            </div>
            <section className=" lg:columns-3 md:columns-2 gap-3 xl:w-[1200px] mx-auto  space-y-3 pb-28">
                {galleryImages.map((item, index) => {
                    return (
                        <div
                            className="transform hover:scale-95 duration-300 w-full h-full "
                            key={index}
                        >
                            <ImageFit
                                image={item.image}
                                alt="index"
                                // layout="responsive"
                                width={item.image.width}
                                height={item.image.height}
                            />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Gallery
