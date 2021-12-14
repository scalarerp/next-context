import { useTheme } from 'next-themes'
import { MoonSvg, SunSvg } from 'common/svgIcons'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()

    return (
        <header className=" rounded-full p-2 top-2 right-2">
            <div className="cursor-pointer">
                {theme === 'light' ? (
                    <MoonSvg
                        onClick={() => setTheme('dark')}
                        className="h-8 w-8 "
                    />
                ) : (
                    <SunSvg
                        onClick={() => setTheme('light')}
                        className="h-8 w-8  "
                    />
                )}
            </div>
        </header>
    )
}

export default ThemeSwitcher
