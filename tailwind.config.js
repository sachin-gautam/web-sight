module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#7C9EB2',
        'custom-gray': '#f3f4f6',
        'custom-bg' : '#7C9EB2',
        'custom-nav': '#1c6085',
        'custom-nav-text': '#18272e'
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif'],
      },
      spacing:{
        '200': '200px',
      },
      fontSize: {
        'custom-sm': '0.875rem',  // Example: Custom small size
        'custom-md': '1.125rem',  // Example: Custom medium size
        'custom-lg': '1.5rem',    // Example: Custom large size
      },
    },
  },
  plugins: [],
}
