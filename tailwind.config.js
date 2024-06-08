/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./webapp/**/*.html"],
    theme: {
        extend: {
            colors: {
                theme: {
                    dark: "#05060F",
                    light: "#F2F4F9",
                    blue: {
                        800: "#EFF4FA",
                        700: "#D5E6ED",
                        450: "#5B627A",
                        400: "#4F689A",
                        300: "#404E58",
                    },
                },
            },
            dropShadow: {
                textDark: "0 2px 1.5px rgba(0 0 0 / 0.2)",
                textLight: "0 2px 1.5px rgba(255 255 255 / 0.3)",
            },
        },
    },
    plugins: [],
};
