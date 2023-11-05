import { fonts } from "@/theme/fonts";

export const leftSideStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#f9f8f8",
  width: "100%",
  height: "832px",
  margin: 0,
  padding: 0,
};

export const logoStyle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: ["50%", "60%", "70%", "10%"],
  height: ["41.02px", "49.224px", "57.428px", "82.04px"],
  paddingTop: "20px",
  paddingLeft: "20px",
};

export const mainImageStyle = {
  maxWidth: ["90%", "92%", "94%", "96%"],
  maxHeight: ["700px", "750px", "780px", "800px"],
  margin: "0 auto",
};

export const textStyle = {
  position: "relative",
  fontSize: "40px",
  fontWeight: 700,
  fontFamily: fonts.alternative,
  textAlign: "center",
  marginLeft: "40px",
  color: "black",
};

export const headingStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: ["30%", "40%", "50%", "60%"],
  height: "42px",
  marginTop: "60px",
  fontSize: ["20px", "24px", "28px", "32px"],
  maxWidth: "90%",
  alignSelf: "center",
};

export const rectangleIconStyle = {
  backgroundColor: "#282A2F",
  color: "#a1a9b5",
  borderWidth: "0.5px",
  borderColor: "#8692A6",
  fontFamily: fonts.heading,
  height: "50px",
  paddingLeft: "20px",
  paddingRight: "20px"
};


export const registerButtonStyle = {
  width: "300px",
  height: "50px",
  borderRadius: "6px",
  bg: "#5871EB",
  color: "black",
  flexShrink: 0
};

export const loginButtonStyle = {
  width: "300px",
  height: "50px",
  borderRadius: "6px",
  background: "#D0A2D1",
  color: "black",
  flexShrink: 0
};

export const orTextStyle = {
  display: "flex",
  width: "36px",
  height: "10px",
  flexDirection: "column",
  justifyContent: "center",
  flexShrink: 0,
  color: "#BABABA",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

export const lineStyle = {
  width: "172px",
  height: "1px",
  background: "#F5F5F5",
};