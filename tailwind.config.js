/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F97316', // Orange-500
                    dark: '#EA580C',    // Orange-600
                    light: '#FFEDD5',   // Orange-100
                },
                accent: {
                    DEFAULT: '#0EA5E9', // Sky-500
                    dark: '#0284C7',    // Sky-600
                },
                background: {
                    light: '#F8FAFC',   // Slate-50
                    dark: '#0F172A',    // Slate-900
                },
                surface: {
                    light: '#FFFFFF',
                    dark: '#1E293B',    // Slate-800
                },
                text: {
                    primary: {
                        light: '#0F172A', // Slate-900
                        dark: '#F1F5F9',  // Slate-100
                    },
                    secondary: {
                        light: '#64748B', // Slate-500
                        dark: '#94A3B8',  // Slate-400
                    }
                },
                border: {
                    light: '#E2E8F0',   // Slate-200
                    dark: '#334155',    // Slate-700
                }
            },
            fontFamily: {
                display: ['Public Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
