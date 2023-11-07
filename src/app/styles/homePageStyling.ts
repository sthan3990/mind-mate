import { fonts } from "@/theme/fonts";

export const logoStyle = {
  width: ["5em", "5em", "7em", "8em"],
  height: ["5em", "5em", "7em", "8em"],
  position: "absolute",
  top: "10px",
  left: ["10px", "20px", "30px", "50px"],
  zIndex: 2,
};

export const linkStyle = {
  fontWeight: "bold",
  color: "gray.600",
  mx: [2, 5, 6, 7],
  fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
  ml: [4, 10, 23],
  whiteSpace: 'nowrap',
};

export const accountButtonStyle = {
  backgroundColor: "rgba(254, 143, 85, 0.5)",
  width: "10%",
  height: "53px",
  margin: 0,
  lineHeight: "normal",
  fontFamily: fonts.heading,
  fontSize: ["0.8em", "0.9em", "1em", "1.3em"],
  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
};

export const dividerStyle = {
  mt: 0,
  bgGradient: "linear(to-r, #f0e3f1, #fcc3a4)",
  height: "5px",
  width: "100%",
  border: "none",
  boxSizing: "border-box",
};

// export const dotStyle = {
//   color: "#15193B",
//   fontSize: ["32px", "2em", "3em", "4em"],
//   fontFamily: fonts.alternative,
//   fontWeight: "700",
//   letterSpacing: 3.2,
//   wordWrap: "break-word",
//   display: "inline",
//   mx: 2,
// };

export const chatStyle = {
  color: "#FF6863",
  fontSize: ["2em", "3em", "3em", "4em"],
  fontFamily: fonts.alternative,
  fontWeight: "700",
  letterSpacing: 3.2,
  wordWrap: "break-word",
  display: "inline",
};

export const reflectStyle = {
  color: "rgba(255, 117.79, 42.50, 0.80)",
  fontSize: ["2em", "3em", "3em", "4em"],
  fontFamily: fonts.alternative,
  fontWeight: "700",
  letterSpacing: 3.2,
  wordWrap: "break-word",
  display: "inline",
};

export const measureStyle = {
  color: "#B022AA",
  fontSize: ["2em", "3em", "3em", "4em"],
  fontFamily: fonts.alternative,
  fontWeight: "700",
  letterSpacing: 3.2,
  wordWrap: "break-word",
  display: "inline",
};

export const journeyStyle = {
  color: "#15193B",
  fontSize: ["2em", "3em", "3em", "4em"],
  fontFamily: fonts.alternative,
  fontWeight: "700",
  letterSpacing: 3.2,
  wordWrap: "break-word",
  width: { base: '7em', md: 'auto' },
  textAlign: "center",
};

export const awarenessStyle = {
  color: "#15193B",
  fontSize: ["2em", "3em", "3em", "4em"],
  fontFamily: fonts.alternative,
  fontWeight: "700",
  letterSpacing: 3.2,
  wordWrap: "break-word",
};

export const drawerLinks = {
  color: "navy",
  mx: [2, 5, 6, 7],
  fontSize: "1.2em",
  ml: [2, 8, 20],
  fontWeight: 'bold',
  padding: '10px 10px',
  my: '0.6em',
  _hover: { background: "#FEEBC8", color: "#2D3258" },
  borderRadius: "40px", // Add rounded border
  border: "2px", // Add white border
};

export const drawerMain = {
  bg: "#FEEBC8",
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
}

export const drawerLogoStyle = {
  ml: "3em",
  width: ["8em"],
  height: ["8em"],
};