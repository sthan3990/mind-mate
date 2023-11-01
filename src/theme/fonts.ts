import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Poppins } from "next/font/google";
const poppins = Poppins({weight: "200", subsets: ["latin"]});
const poppinsHeader = Poppins({weight: "500", subsets: ["latin"]});

import { Alegreya_Sans } from "next/font/google";
const alegreya_Sans = Alegreya_Sans({ weight: "500", subsets: ['greek'] });

/** App Fonts */
export const fonts = {
  body: poppins.style.fontFamily,
  heading: poppinsHeader.style.fontFamily,
  alternative: alegreya_Sans.style.fontFamily,
};
