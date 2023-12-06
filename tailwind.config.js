/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#AAFAC8",
        second: "#515158",
        third: "#424769",
        fourth: "#2d3250",
        fifth: "#f9b17a",
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
      keyframes: {
        blob: {
          "0%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        blob: "blob 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
