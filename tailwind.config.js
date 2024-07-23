/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
      backgroundImage: 
      {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          // background: linear-gradient(132deg, rgba(255,89,0,1) 35%, rgba(255,174,121,1) 100%);
          // background: linear-gradient(90deg, rgba(130,18,41,1) 35%, rgba(37,3,10,1) 100%);
          // background: linear-gradient(90deg, rgba(147,183,74,1) 0%, rgba(73,91,38,1) 50%, rgba(11,13,7,1) 100%);
      },
      color:
      {
        Primary:
        {
          
          "100":"#EF4535",
          "200":"#FF6A00",

        },
        Secendry:
        {
          "100":"#e0e0e0",
          "200":"#9FA09F",
          "300":"#696B69",
          "400":"#3A3A3A"
        },
        Green:
        { 
          "100":"#00BF6F",
          "200":"#4CAF50",
          "300":"#1D9A34"
        },
        Red:
        {
          "100":"#F41E1E",
          "200":"#D32F2F"
        },
        Sorrel:
        {
          "100":"#272C48",
          "200":"#272C48",
          "300":"#1B1F35",
        },
        "Gold":"#F7A468",
        "Purple":"#5947DA",
        "Bronze":"#BA740B",
        "Dark Blue":"#0B3193",
        "Blue":"#1061EF",
        "Ciyan":"#0FABC6",
        
        
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
