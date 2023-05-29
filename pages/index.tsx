import { Box, Button, Card } from "@mui/material";
import { useTheme } from "next-themes";

const HomePage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Card elevation={0}>
      HomePage
      <Button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        toggleColorMode
      </Button>
    </Card>
  );
};

export default HomePage;
