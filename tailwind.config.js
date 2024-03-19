module.exports = {
  content: ["./public/**/*.{html, js}"],

  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: "#266BEA",

        purple: {
          primary: "#4326EA",
        },
        seal: {
          primary: "#26CDEA",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
