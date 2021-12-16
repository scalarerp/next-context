import React from 'react'

import { GalleryImage } from 'galleries'
import ImageFit from 'components/imageFit/imageFit'

interface Props {
    galleryImages: GalleryImage[]
    className?: string
}

const Gallery2 = (props: Props) => {
    const { galleryImages, className = '' } = props
    return (
        <div>
            <h1>Gallery2</h1>
            <section
                className={`${className} p-5 relative  text-justify columns-1 sm:columns-2 lg:columns-3 `}
            >
                {galleryImages.map((item, index) => {
                    return (
                        <div
                            className="transform hover:scale-95 duration-300 "
                            key={index}
                        >
                            <ImageFit
                                image={item.image}
                                alt={item.title}
                                // width={800} //===w-80
                                // height={400} //===w-40
                                // objectFit="none"
                                // className='w-80 h-40'
                            />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Gallery2
