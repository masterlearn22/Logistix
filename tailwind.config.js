/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B132B',       // Midnight Deep Blue
          navy: '#1C2541',       // Soft Corporate Navy
          accent: '#FF007F',     // Cyber Pink/Neon Tech Accent
          surface: '#F8FAFC',    // Off-white untuk background terang (Slate 50)
          muted: '#64748B',      // Grey untuk teks sekunder (Slate 500)
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
