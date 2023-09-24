/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/plugin')} */
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ matchVariant }) {
            matchVariant("min", (value) => `@media (min-width: ${value})`, {
                sort(a, z) {
                    return parseInt(a) - parseInt(z);
                },
            });
        }),
        plugin(function ({ matchVariant }) {
            matchVariant("max", (value) => `@media (max-width: ${value})`, {
                sort(a, z) {
                    return parseInt(a) - parseInt(z);
                },
            });
        }),
    ],
};
