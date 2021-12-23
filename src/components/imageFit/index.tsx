import React from 'react'
import Image from 'next/image'

interface Props {
    image: StaticImageData
    alt?: string
    width?: number
    height?: number
    objectFit?: 'none' | 'cover'
    className?: string
}

const ImageFit = (props: Props) => {
    const {
        image,
        alt = '',
        objectFit = 'cover',
        width = 800,
        height = 400,
        className = 'w-80 h-40',
    } = props
    return (
        <Image
            className={`${className} object-cover rounded-lg shadow-xl `}
            src={image.src}
            alt={alt}
            // layout="responsive"
            width={width}
            height={height}
            objectFit={objectFit}
        />
    )
}

export default ImageFit
