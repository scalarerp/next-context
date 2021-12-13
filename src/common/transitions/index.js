// constants.ts
const transitionSpring = {
    type: 'spring',
    stiffness: 200,
    damping: 10,
}
export const variantsSpring = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0, transitionSpring },
    whileTap: { scale: 0.95, rotate: 15 },
}
