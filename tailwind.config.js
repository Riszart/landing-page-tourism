/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'inicio': "url('./img/peru-belleza.webp')",
        'lima': "url('./img/lima.jpg')",
        'machu-pichu': "url(./img/machu-picchu.jpg)",
        'nazca': "url(./img/lineas-de-nazca.jpg)",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'icons':'# rgb(156 163 175)',
      }),
      textColor: {
        'icons':'# rgb(156 163 175)',
      },
      fontFamily: {
        System:['system-ui']
      },
      spacing: {
        '128': '32rem',
        'content': '80rem',
      }
    },
  },
  plugins: [],
}

