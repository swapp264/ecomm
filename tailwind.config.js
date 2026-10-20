/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#101010',
          section: '#141414',
          card: '#1A1A1A',
          elevated: '#202020',
        },
        border: {
          DEFAULT: '#303030',
          light: '#404040',
        },
        gold: {
          DEFAULT: '#FFC107',
          dark: '#E5A900',
          light: '#FFD54F',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3',
          muted: '#858585',
        },
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 5px #FFC107' },
          '50%': { boxShadow: '0 0 20px #FFC107, 0 0 40px #FFC107' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'lift-up': {
          '0%': { transform: 'translateY(0) scaleX(1)' },
          '30%': { transform: 'translateY(-5px) scaleX(1.05)' },
          '60%': { transform: 'translateY(-20px) scaleX(0.97)' },
          '100%': { transform: 'translateY(-35px) scaleX(1)' },
        },
        'barbell-flex': {
          '0%': { transform: 'scaleY(1)' },
          '40%': { transform: 'scaleY(1.04)' },
          '70%': { transform: 'scaleY(0.97)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'plate-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 4px #FFC107)' },
          '50%': { filter: 'drop-shadow(0 0 14px #FFC107) drop-shadow(0 0 28px #E5A900)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease forwards',
        'slide-in-right': 'slide-in-right 0.3s ease',
        'slide-in-left': 'slide-in-left 0.3s ease',
        'pulse-gold': 'pulse-gold 2s infinite',
        marquee: 'marquee 20s linear infinite',
        'lift-up': 'lift-up 1.2s ease-in-out infinite alternate',
        'barbell-flex': 'barbell-flex 1.2s ease-in-out infinite',
        'plate-glow': 'plate-glow 1.5s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFC107 0%, #E5A900 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)',
        shimmer: 'linear-gradient(90deg, transparent 0%, rgba(255,193,7,0.08) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
