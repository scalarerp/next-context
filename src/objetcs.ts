export const navLinks: NavLink[] = [
    {
        name: 'Inicio',
        href: '/',
        className: '',
    },
    {
        name: 'Sobre',
        href: '/about',
        className: '',
    },

    {
        name: 'Contato',
        href: '/contact',
        className: '',
    },
]

export interface NavLink {
    name: string
    href: string
    className: string
}
