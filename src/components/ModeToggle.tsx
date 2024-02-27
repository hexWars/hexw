import * as React from "react"
import { Moon, Sun, SunMoon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">("theme-light")

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark")
        setThemeState(isDarkMode ? "dark" : "theme-light")
    }, [])

    const toggleTheme = () => {
        setThemeState(prevTheme => {
            if (prevTheme === "theme-light") {
                return "dark"
            } else if (prevTheme === "dark") {
                return "system"
            } else {
                return "theme-light"
            }
        })
    }

    React.useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    }, [theme])

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme} className="bg-transparent hover:bg-transparent animate-pulse hover:animate-none">
            {theme === "theme-light" && (
                <>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:stroke-ring" />
                    <span className="sr-only">Toggle to dark mode</span>
                </>
            )}
            {theme === "dark" && (
                <>
                    <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:stroke-ring" />
                    <span className="sr-only">Toggle to light mode</span>
                </>
            )}
            {theme === "system" && (
                <>
                    <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100 hover:stroke-ring" />
                    <span className="sr-only">Toggle to system mode</span>
                </>
            )}
        </Button>
    )
}
