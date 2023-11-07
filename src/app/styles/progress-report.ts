import { fonts } from "@/theme/fonts";

export const styling = {
  grid: {
    color: "black",
    fontWeight: "800",
    templateAreas: `
      "title title"
      "history chat"
      "history input"
    `,
    gridTemplateRows: "70px 1fr 0.12fr",
    gridTemplateColumns: "257px 1fr",
    width: "100vw",
    height: "100vh",
    gap: "0",
    m: "0",
    p: "3em 5em",
  },

  taxtHeader: {
    fontFamily: fonts.body,
    fontWeight: "bold",
    fontSize: "40px",
    color: "#FFFFFF",
    textAlign: "center",
  },
  dropdown: {
    fontFamily: fonts.body,
    fontWeight: "bold",
    bg: "#f2e5fc",
    width: "10.5em",
    borderColor: "black",
  },
};
