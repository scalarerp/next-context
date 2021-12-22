import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { varFadeInUp } from './variants'

TextAnimate.propTypes = {
    text: PropTypes.string,
    variants: PropTypes.object,
    sx: PropTypes.object,
}

export default function TextAnimate({ text, variants, sx, ...other }) {
    return (
        <motion.h1
            sx={{
                typography: 'h1',
                overflow: 'hidden',
                display: 'inline-flex',
                ...sx,
            }}
            {...other}
        >
            {text.split('').map((letter, index) => (
                <motion.span key={index} variants={variants || varFadeInUp}>
                    {letter}
                </motion.span>
            ))}
        </motion.h1>
    )
}
