import Carousel from 'common/carousel'
import '../styles/globals.scss'
// import 'tailwindcss/tailwind.css'
import { TasksProvider } from '../context/TasksContext'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }) {
    return (
        <TasksProvider>
            <Component {...pageProps} />
        </TasksProvider>
    )
}

export default MyApp
