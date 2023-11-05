import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Poppins } from "next/font/google";
const poppinsBody = Poppins({ weight: '100', subsets: ["latin"] });
const poppinsHeader = Poppins({ weight: '500', subsets: ["latin"] });
const poppinsItalic = Poppins({ weight: '500', subsets: ["latin"], style: ["italic"] });

import { Alegreya_Sans } from "next/font/google";
const alegreya_Sans = Alegreya_Sans({ weight: "500", subsets: ['greek'] });


import { Inter } from "next/font/google";
const inter = Inter({ weight: '800', subsets: ["latin"] });

import { Cantarell } from "next/font/google";
const cantarell = Cantarell({ weight: '400', subsets: ["latin"] });

/** App Fonts */
export const fonts = {
  body: poppinsBody.style.fontFamily,
  poppinsItalic:poppinsItalic.style.fontFamily,
  heading: poppinsHeader.style.fontFamily,
  alternative: alegreya_Sans.style.fontFamily,
  formspecial: inter.style.fontFamily,
  cantarell: cantarell.style.fontFamily 
};
