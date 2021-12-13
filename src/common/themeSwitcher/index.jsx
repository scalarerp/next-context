import { HiSun, HiMoon } from 'react-icons/hi'

import { useTheme } from 'next-themes'

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()

    return (
        <header className=" rounded-full p-2 top-2 right-2">
            <div className="cursor-pointer">
                {theme === 'light' ? (
                    <HiMoon
                        onClick={() => setTheme('dark')}
                        className="h-8 w-8 "
                    />
                ) : (
                    <HiSun
                        onClick={() => setTheme('light')}
                        className="h-8 w-8  "
                    />
                )}
            </div>
        </header>
    )
}

export default ThemeSwitcher
