module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blush: "#FFC5ED",
                sky: "#B3EBFF",
                lavender: "#D4C5FF",
                silver: "#C7C7C7",
                charcoal: "#4D4D4D",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
