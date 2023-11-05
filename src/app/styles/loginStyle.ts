import { fonts } from "@/theme/fonts";

export const leftSideStyle = {
  display: "flex",
  width: "584px",
  height: "570px",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  flexShrink: "0",
};

export const rightSideStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#f9f8f8",
  height: "100%",
  margin: 0,
  padding: 0,
};

export const mainImageStyle = {
  maxWidth: ["90%", "92%", "94%", "96%"],
  maxHeight: ["700px", "750px", "780px", "800px"],
  margin: "0 auto",
};

export const textStyle = {
  position: "relative",
  fontSize: "40px",
  fontWeight: 600,
  fontFamily: fonts.heading,
  textAlign: "left",
  marginLeft: "20px",
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
 