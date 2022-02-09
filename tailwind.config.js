module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['"Times New Roman "', 'YuMincho', '"Yu Mincho"', 'yu-mincho-pr6', '"Hiragino Mincho ProN"', 'serif'],
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        'title-color': '#0085FF',
      },
      backgroundColor: {
        base: '#fff2ec',
      },
      backgroundImage: {
        egg: "url('src/images/egg.svg')",
        electron: "url('src/images/iphone.png')",
        ellipse: "url('src/images/Ellipse.svg')",
      },
      borderColor: {
        primary: '#0085FF',
      },
      height: {
        100: '28rem',
        128: '32rem',
        256: '64rem',
      },
      width: {
        62: '18rem',
        100: '28rem',
        128: '32rem',
      },
      animation: {
        byeShutter: 'byeShutter 2.4s forwards',
        openShutter: 'openShutter 2.4s forwards',
        logo: 'logo 0.8s forwards',
        passingBar: 'passingBar 1s ease 0s 1 normal forwards',
        passingText: 'passingText 0s ease .5s 1 normal forwards',
      },
      keyframes: {
        byeShutter: {
          '70%': { opacity: 1 },
          '100%': { display: 'none', opacity: 0, zIndex: -1 },
        },
        openShutter: {
          '0%': { opacity: 0 },
          '80%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        logo: {
          '0%': { opacity: 1 },
          '50%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'scale(0.8)' },
        },
        passingBar: {
          '0%': { left: 0, width: 0 },
          '50%': { left: 0, width: '100%' },
          '51%': { left: 0, width: '100%' },
          '100%': { left: '100%', width: 0 },
        },
        passingText: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: '70%' },
        },
      },
    },
  },
  plugins: [],
};
