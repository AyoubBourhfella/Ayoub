/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00c0a8',
        "secondary": "#1fab9d",
        "gray": "#4f566d",
        'dark': "#10172c",
        "backhight": '#1a1b26',
        "backhightlight": '#1e1f2a',
      },
      fontFamily: {
        "monaco": "Monaco",
        "Menlo_r": "Menlo Regular"
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expandWidth: {
          '0%': { width: '0' },
          '100%': { width: 'auto' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    }, animation: {
      slideIn: 'slideIn 0.5s ease-out',
      expandWidth: 'expandWidth 0.5s ease-out',
      spin: 'rotate 2s linear infinite'
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}
