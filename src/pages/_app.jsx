import Header from 'common/header'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.scss'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider
            storageKey="scalarTheme"
            attribute="class"
            enableSystem={false}
            themes={['light', 'dark']}
            defaultTheme="dark"
        >
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
