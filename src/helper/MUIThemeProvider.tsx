import { useTheme } from "next-themes";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/Utils/theme";

const MUIThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
