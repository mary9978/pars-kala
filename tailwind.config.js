/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      container:
      {
        center:true
      },
      colors:
      {
        Primary:
        {
          
          100:'#EF4535',
          200:"#FF6A00",

        },
        Secendry:
        {
          100:'#e0e0e0',
          200:'#9FA09F',
          300:'#696B69',
          400:'#3A3A3A'
        },
        Green:
        { 
          1000:'#00BF6F',
          1100:'#4CAF50',
          1200:'#1D9A34'
        },
        Red:
        {
          1000:'#F41E1E',
          1100:'#D32F2F'
        },
        Sorrel:
        {
          100:'#272C48',
          200:'#272C48',
          300:'#1B1F35',
        },
        "parsGold":"#F7A468",
        "parsPurple":"#5947DA",
        "parsBronze":"#BA740B",
        "parsDarkBlue":"#0B3193",
        "parsBlue":"#1061EF",
        "parsCyan":"#0FABC6",
        
        
      },
    },
  },
  plugins: [
    function({addVariant})
    {
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');

    }
  ],
};
