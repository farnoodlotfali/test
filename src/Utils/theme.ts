import { PaletteOptions, createTheme } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#403F3F",
      200: "#232323",
      main: "#0C0127",
      // dark: "#586580",
      // 800: "#44506B"
    },
    secondary: { main: "#2a48f3" },
    mode: "light",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: "#9147FF" },
    secondary: { main: "#2a48f3" },
    mode: "dark",
  },
});
