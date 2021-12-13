import Header from 'common/header'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.scss'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <Header>
                <Component {...pageProps} />
            </Header>
        </ThemeProvider>
    )
}

export default MyApp
