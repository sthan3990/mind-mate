import { fonts } from "@/theme/fonts";

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
  width: "400px",
  backgroundColor: "#282A2F",
  color: "#a1a9b5",
  borderWidth: "0.5px",
  borderColor: "#8692A6",
  fontFamily: fonts.heading,
  height: "50px",
  paddingLeft: "20px",
  paddingRight: "20px"
};


export const saveButtonStyle = {
  width: "400px",
  height: "50px",
  borderRadius: "6px",
  bg: "#5871EB",
  color: "black",
  flexShrink: 0
};

export const deleteButtonStyle = {
  width: "400px",
  height: "50px",
  borderRadius: "6px",
  background: "#b02f2f",
  color: "black",
  flexShrink: 0
};
