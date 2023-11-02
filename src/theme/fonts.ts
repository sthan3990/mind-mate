import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Poppins } from "next/font/google";
const poppinsBody = Poppins({ weight: '100', subsets: ["latin"] });
const poppinsHeader = Poppins({ weight: '200', subsets: ["latin"] });

import { Alegreya_Sans } from "next/font/google";
const alegreya_Sans = Alegreya_Sans({ weight: "500", subsets: ['greek'] });

const poppinsBody = Poppins({ weight: '100', subsets: ["latin"] });
const poppinsHeader = Poppins({ weight: '200', subsets: ["latin"] });

import { Inter } from "next/font/google";
const inter = Inter({ weight: '800', subsets: ["latin"] });


/** App Fonts */
export const fonts = {
  body: poppinsBody.style.fontFamily,
  heading: poppinsHeader.style.fontFamily,
  alternative: alegreya_Sans.style.fontFamily,
  formspecial: inter.style.fontFamily
};
