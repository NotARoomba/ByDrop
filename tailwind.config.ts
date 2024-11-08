import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/app/**/*.{js,tsx,ts,jsx}",
    "./src/components/**/*.{js,tsx,ts,jsx}",
  ],
  //darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

