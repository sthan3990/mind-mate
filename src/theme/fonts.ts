import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Poppins } from "next/font/google";
const poppins = Poppins({weight: "200", subsets: ["latin"]})
const poppinsHeader = Poppins({weight: "500", subsets: ["latin"]})

/** App Fonts */
export const fonts = {
  body: poppins.style.fontFamily,
  heading: poppinsHeader.style.fontFamily,

};
