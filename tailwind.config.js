/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                custome: {
                    orange: "#EF7825",
                    yellow: "#F0DA15",
                    gray: "#191919",
                    graylight: "#2C2C2C",
                    dark: "#282828",
                    green: "#30C159",
                    red: "#D14A41",
                    blue: "#15AAF4",
                    gradient: {
                        yellow1: "#F0DA15",
                        yellow2: "#9C8D0B",
                        yellow3: "#6F6511",
                        yellow4: "#4C4616",
                        yellow5: "#33301A",
                        yellow6: "#24221C",
                    },
                    radialred: {
                        from: "#2D1E1D",
                        to: "#1A1919",
                    },
                    radialyellow: {
                        from: "#3E3A16",
                        via: "rgba(60, 56, 24, 0.647)",
                        via2: "rgba(59, 55, 27, 0.176)",
                        to: "rgba(59, 55, 29, 0)",
                    },
                    radialgreen: {
                        from: "#2F4937",
                        via1: "#2A3E30",
                        via2: "#252F28",
                        to: "#232A25",
                    },
                },
            },
            backgroundImage: {
                radial: "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
