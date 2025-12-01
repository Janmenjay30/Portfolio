/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#050505",
                secondary: "#0a0a0a",
                card: "#111111",
                accent: {
                    DEFAULT: "#6366f1", // Indigo
                    purple: "#a855f7", // Purple
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
