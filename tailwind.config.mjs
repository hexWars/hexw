/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "theme--bg": 'hsl(--theme-bg)',
        "theme-link": 'hsl(--theme-link)',
        "theme-text": 'hsl(--theme-text)',
        "theme-accent": 'hsl(--theme-accent)',
        "theme-accent-2": 'hsl(--theme-accent-2)',
        "theme-quote": 'hsl(--theme-quote)',

        // 'dark-purple-bg-nav': '#b1a4e5',
        // 'dark-purple-text-nav': '#D7BBF5',
        // 'dark-purple-title': '#b1a4e5',
        // 'dark-purple-text': 'rgb(218, 218, 219)',
        // 'dark-purple-bg': '#0d1117',
        // 'dark-purple-bg2': '#010005',
        // 'dark-purple-bg-card': '#15181C',
        // 'dark-purple-bg-border': '#9F91CC',
        // 'dark-purple-bg-border2': '#FAE7F3',
        // 'dark-purple-code': '#d2a8ff',
        // 'dark-icon1': '#3D246C',
        // 'dark-icon2': '#5C4B99',
        // 'dark-icon3': '#9F91CC',
        // 'dark-icon4': '#FFDBC3',
        // 'dark-icon1': '#33186B',
        // 'dark-icon2': '#7360DF',
        // 'dark-icon3': '#C499F3',
        // 'dark-icon4': '#F2AFEF',
        // 'dark-icon1': '#1F2544',
        // 'dark-icon2': '#474F7A',
        // 'dark-icon3': '#81689D',
        // 'dark-icon4': '#FFD0EC',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}