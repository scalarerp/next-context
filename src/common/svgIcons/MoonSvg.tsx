import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const MoonSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'currentColor' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                stroke={color}
                viewBox="0 0 20 20"
            >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 33 33"
                        to="360 33 33"
                        dur="2s"
                        repeatCount="1"
                    />
                </path>
            </svg>
        </>
    )
}

export default MoonSvg
