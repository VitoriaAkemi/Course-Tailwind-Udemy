import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: { extend: {
    fontFamily: {
      sans: ["Poopins"]}
  } },
} satisfies Config