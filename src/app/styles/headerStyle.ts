import { fonts } from "@/theme/fonts";

export const logoStyle = {
  width: ["60px"],
  height: ["60px"],
  zIndex: 2,
  marginLeft: '15px'
};

export const logoStyleMobile = {
  width: ["60px"],
  height: ["60px"],
  zIndex: 2,
  marginLeft: '15px'
};

export const mindMateStyle = {
  color: 'white',
  fontFamily: fonts.heading,
  fontWeight: '600',
  wordWrap: 'break-word',
  marginLeft: '25px',
  display: ['none', 'none', 'block', 'block'],
  fontSize: ["0em", "1em", "1em", "2em"],
};

export const verticalLineStyle = {
  borderLeft: '6px solid',
  borderColor: '#15193B',
  alignSelf: 'stretch',
  mx: 20,
  marginLeft: ['10px', '-20px', '-40px', '-50px'],
  display: ['none', 'none', 'block', 'block']
};

export const linkStyle = {
  color: "white",
  mx: [2, 5, 6, 7],
  fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
  ml: [2, 8, 20]
};

export const linkTab = {
  fontWeight: "bold",
  color: "white",
  mx: [2, 5, 6, 7],
  fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
  ml: [2, 8, 20]
};

export const accountButtonStyle = {
  backgroundColor: "#FE8F55E5",
  width: "10%",
  height: "53px",
  margin: 0,
  marginRight: '25px',
  lineHeight: "normal",
  fontFamily: fonts.heading,
  fontSize: ["0.8em", "0.9em", "1em", "1.3em"],
  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
};
