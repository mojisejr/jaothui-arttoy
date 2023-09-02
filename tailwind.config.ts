import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#E3A51D",
          secondary: "#374151",
          accent: "#65a30d",
          neutral: "#1f2937",
          "base-100": "#f3f4f6",
          info: "#155e75",
          success: "#166534",
          warning: "#ea580c",
          error: "#dc2626",
        },
      },
    ],
  },
} satisfies Config;
