export const Directions = [
    {
        text: 'PRINCIPAL',
        to: '/',
        active: window.location.pathname === '/'
    },
    {
        text: 'NUESTRA FIRMA',
        to: '/firm',
        active: window.location.pathname === '/firm'
    },
    {
        text: 'SERVICIOS',
        to: '#',
        active: window.location.pathname === '/services'
    },
    {
        text: 'CONTÁCTENOS',
        to: '#',
        active: window.location.pathname === '/contact'
    },
]