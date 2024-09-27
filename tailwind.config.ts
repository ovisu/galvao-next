import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
   
    
  ],
  mode: "jit",  

  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
