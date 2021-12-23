import React from 'react'
import Image from 'next/image'

interface Props {
    image: StaticImageData
    alt?: string
    width?: number
    height?: number
    className?: string
}

const ImageAvatar = (props: Props) => {
    const {
        image,
        alt = '',
        width = 100,
        height = 100,
        className = 'w-10 h-10',
    } = props
    return (
        <Image
            className={`${className}`}
            src={image.src}
            alt={alt}
            // layout="responsive"
            width={width}
            height={height}
        />
    )
}

export default ImageAvatar
