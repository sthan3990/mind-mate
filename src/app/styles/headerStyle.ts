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
  display: ['none', 'none', 'block', 'block'],
  fontSize: ["0em", "1em", "1em", "2em"],
};

export const verticalLineStyle = {
  borderLeftWidth: '6px',
  borderColor: '#15193B',
  height: 'auto',
  alignSelf: 'stretch',
  display: ['none', 'none', 'block', 'block']
};

export const linkStyle = {
  fontWeight: "normal",
  color: "white",
  fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
  whiteSpace: 'nowrap'
};

export const linkTab = {

  fontWeight: "800",
  color: "white",
  fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
  whiteSpace: 'nowrap'
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

export const accountButtonStyle = {
  backgroundColor: "#FE8F55E5",
  width: "10%",
  height: "50px",
  margin: 0,
  marginRight: '25px',
  lineHeight: "normal",
  minW: "100",
  fontFamily: fonts.heading,
  fontSize: ["0.8em", "0.9em", "1em", "1.3em"],
  boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  paddingTop: "10px"
};
