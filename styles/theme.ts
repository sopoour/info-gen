import { createTheme } from "@mui/material/styles";

export const palette = {
  common: {
    black: "#000",
    white: "#fff",
    background: "#161616",
    darkGrey: "#525252",
    lightGrey: "#b9b9b9",
    grey: "#868686",
  },
  primary: {
    light: "#ffe082",
    main: "#ffb900",
    dark: "#c77800",
    contrastText: "#fff",
  },
  secondary: {
    light: "#a255b5",
    main: "#8c54a1",
    dark: "#5f3177",
    contrastText: "#fff",
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#fff",
  },
  warning: {
    light: "#ffb74d",
    main: "#ff9800",
    dark: "#f57c00",
    contrastText: "#fff",
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#fff",
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
    contrastText: "#fff",
  },
};

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Oswald', sans-serif;",
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Oswald', sans-serif;",
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Oswald', sans-serif;",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Oswald', sans-serif;",
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Oswald', sans-serif;",
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Oswald', sans-serif;",
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
  palette,
  components: {
    MuiButton: {
      // styleOverrides: {
      //   outlined: {
      //     border: "2px solid #ffb900",
      //     color: "#ffb900",
      //     borderRadius: "4px",
      //     boxShadow:
      //       "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
      //     ":hover": {
      //       border: "2px solid #ffb900",
      //     },
      //   },
      //   contained: {
      //     background: "linear-gradient(45deg, #ffb900, #b37400)",
      //     borderRadius: "4px",
      //     boxShadow:
      //       "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
      //   },
      //   root: {
      //     color: "#161616",
      //   },
      // },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: palette.common.white,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff", // Change the label color here
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          color: "#fff",
        },
        deleteIcon: {
          color: "#ffb900",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#fff", // Change the menu item color here
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          "&:hover $notchedOutline": {
            borderColor: "#aaa",
          },
          "&$focused $notchedOutline": {
            borderColor: "blue",
          },
        },
        select: {
          color: "#fff", // Change the placeholder color here
          "&::placeholder": {
            color: "#fff",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: "#b9b9b9",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: "#222",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#fff",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#b9b9b9",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: palette.common.white,
        },
      },
    },
  },
});

export default theme;
