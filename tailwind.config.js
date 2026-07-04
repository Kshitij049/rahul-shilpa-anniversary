/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-ivory': '#FFF8E7',
        'royal-maroon': '#6D1F2F',
        'deep-wine': '#48141F',
        'kesari-gold': '#D79A2B',
        'antique-gold': '#B8873A',
        'soft-haldi': '#F2C96D',
        'muted-rose': '#C9828C',
        'warm-cream': '#F7E8CF',
        'deep-charcoal': '#292321',
        'deep-blue': '#315A7D',
      },
      fontFamily: {
        'marathi': ['"Noto Serif Devanagari"', '"Tiro Devanagari Marathi"', 'serif'],
        'english': ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        'body': ['Inter', 'Manrope', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'petal-fall': 'petalFall 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
