import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414"
        },
        primary: {
          100: "#d0d2d5",
          200: "#a2a5ab",
          300: "#737780",
          400: "#25314A",
          500: "#161d2c",
          600: "#121723",
          700: "#0d111a",
          800: "#090c12",
          900: "#040609"
        },
        purple: {
          100: "#e7dbf5",
          200: "#ceb7eb",
          300: "#b694e2",
          400: "#9d70d8",
          500: "#854cce",
          600: "#6a3da5",
          700: "#502e7c",
          800: "#351e52",
          900: "#1b0f29"
        },  
        green: {
          100: "#e1fafe",
          200: "#c3f5fd",
          300: "#a4f0fc",
          400: "#86ebfb",
          500: "#68e6fa",
          600: "#53b8c8",
          700: "#3e8a96",
          800: "#2a5c64",
          900: "#152e32"
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0"
        },
        primary: {
          100: "#040609",
          200: "#090c12",
          300: "#0d111a",
          400: "#EBEAEA",
          500: "#161d2c",
          600: "#454a56",
          700: "#737780",
          800: "#a2a5ab",
          900: "#d0d2d5"
        },
        purple: {
          100: "#1b0f29",
          200: "#351e52",
          300: "#502e7c",
          400: "#6a3da5",
          500: "#854cce",
          600: "#9d70d8",
          700: "#b694e2",
          800: "#ceb7eb",
          900: "#e7dbf5"
        },  
        green: {
          100: "#152e32",
          200: "#2a5c64",
          300: "#3e8a96",
          400: "#53b8c8",
          500: "#68e6fa",
          600: "#86ebfb",
          700: "#a4f0fc",
          800: "#c3f5fd",
          900: "#e1fafe"
        },
      })
})

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.green[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              },
            }
          : {
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.green[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#FCFCFC",
              },
            }),
      },
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
};
  
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
  
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
  
