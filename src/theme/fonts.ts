import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Poppins } from "next/font/google";
const poppinsBody = Poppins({weight: '100', subsets: ["latin"] });
const poppinsHeader = Poppins({weight: '500', subsets: ["latin"] });

import { Inter } from "next/font/google";
const inter = Inter({weight: '800', subsets: ["latin"]});

/** App Fonts */
export const fonts = {
  body: poppinsBody.style.fontFamily,
  heading: poppinsHeader.style.fontFamily,
  formspecial: inter.style.fontFamily
  
};
