/** @module designTheme */

import { createTheme, type ThemeOptions } from "@mui/material/styles";

import {
  HEX_COLOR_BLACK,
  HEX_COLOR_EBONY,
  HEX_COLOR_WHITE,
  HEX_COLOR_BLUE_DARK,
  HEX_COLOR_BLUE_EXTRA_DARK,
  HEX_COLOR_BLUE_EXTRA_LIGHT,
  HEX_COLOR_BLUE_LIGHT,
  HEX_COLOR_BLUE_MAIN,
  HEX_COLOR_GRAY_DARK,
  HEX_COLOR_GREEN_EXTRA_LIGHT,
  HEX_COLOR_GREEN_EXTRA_DARK,
  HEX_COLOR_GREEN_LIGHT,
  HEX_COLOR_GREEN_DARK,
  HEX_COLOR_GREEN_MAIN,
  HEX_COLOR_YELLOW_EXTRA_DARK,
  HEX_COLOR_YELLOW_LIGHT,
  HEX_COLOR_YELLOW_DARK,
  HEX_COLOR_YELLOW_MAIN,
  HEX_COLOR_GRAY_EXTRA_LIGHT,
  HEX_COLOR_GRAY_LIGHT,
  HEX_COLOR_GRAY_EXTRA_DARK,
  HEX_COLOR_GRAY_MEDIUM,
  HEX_COLOR_GRAY_MAIN,
  HEX_COLOR_YELLOW_EXTRA_LIGHT,
  HEX_COLOR_RED_MAIN,
  HEX_COLOR_RED_DARK,
  HEX_COLOR_RED_LIGHT,
  HEX_COLOR_RED_EXTRA_DARK,
  HEX_COLOR_RED_EXTRA_LIGHT,
  HEX_COLOR_SALMON_MAIN,
  HEX_COLOR_SALMON_DARK,
  HEX_COLOR_SALMON_LIGHT,
  HEX_COLOR_SALMON_EXTRA_LIGHT
} from "../data/colors";

const neutrals = {
  black: HEX_COLOR_BLACK,
  ebony: HEX_COLOR_EBONY,
  white: HEX_COLOR_WHITE,
  gray: {
    main: HEX_COLOR_GRAY_MAIN,
    medium: HEX_COLOR_GRAY_MEDIUM,
    dark: HEX_COLOR_GRAY_DARK,
    extraDark: HEX_COLOR_GRAY_EXTRA_DARK,
    light: HEX_COLOR_GRAY_LIGHT,
    extraLight: HEX_COLOR_GRAY_EXTRA_LIGHT
  }
};

const accents = {
  salmon: {
    main: HEX_COLOR_SALMON_MAIN,
    dark: HEX_COLOR_SALMON_DARK,
    light: HEX_COLOR_SALMON_LIGHT,
    extraLight: HEX_COLOR_SALMON_EXTRA_LIGHT
  },
  red: {
    main: HEX_COLOR_RED_MAIN,
    dark: HEX_COLOR_RED_DARK,
    light: HEX_COLOR_RED_LIGHT,
    extraDark: HEX_COLOR_RED_EXTRA_DARK,
    extraLight: HEX_COLOR_RED_EXTRA_LIGHT
  },
  yellow: {
    main: HEX_COLOR_YELLOW_MAIN,
    dark: HEX_COLOR_YELLOW_DARK,
    light: HEX_COLOR_YELLOW_LIGHT,
    extraDark: HEX_COLOR_YELLOW_EXTRA_DARK,
    extraLight: HEX_COLOR_YELLOW_EXTRA_LIGHT
  },
  green: {
    main: HEX_COLOR_GREEN_MAIN,
    dark: HEX_COLOR_GREEN_DARK,
    light: HEX_COLOR_GREEN_LIGHT,
    extraDark: HEX_COLOR_GREEN_EXTRA_DARK,
    extraLight: HEX_COLOR_GREEN_EXTRA_LIGHT
  },
  blue: {
    main: HEX_COLOR_BLUE_MAIN,
    dark: HEX_COLOR_BLUE_DARK,
    light: HEX_COLOR_BLUE_LIGHT,
    extraDark: HEX_COLOR_BLUE_EXTRA_DARK,
    extraLight: HEX_COLOR_BLUE_EXTRA_LIGHT
  }
};

declare module "@mui/material/styles" {
  interface Palette {
    neutrals: typeof neutrals;
    accents: typeof accents;
  }
  interface PaletteOptions {
    neutrals?: typeof neutrals;
    accents?: typeof accents;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    red: true;
    blue: true;
    green: true;
    gray: true;
    yellow: true;
    primary: false;
    secondary: false;
    default: false;
    info: false;
    success: false;
    warning: false;
    error: false;
  }
}

// Create and export the theme
const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: accents.salmon.main // Updated to use salmon as primary
    },
    secondary: {
      main: accents.red.main // Note: secondary color is required by MUI
    },
    neutrals,
    accents
  },
  components: {
    // TODO: I find it less than ideal to have overrides in our theme. Probably better to just add a css styling to our Tag component for this
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          fontSize: "0.875rem",
          fontWeight: 500,
          width: "fit-content"
        },
        filled: {
          "&.MuiChip-colorRed": {
            backgroundColor: accents.red.extraLight,
            color: accents.red.main
          },
          "&.MuiChip-colorBlue": {
            backgroundColor: accents.blue.extraLight,
            color: accents.blue.main
          },
          "&.MuiChip-colorGreen": {
            backgroundColor: accents.green.extraLight,
            color: accents.green.main
          },
          "&.MuiChip-colorGray": {
            backgroundColor: neutrals.gray.extraLight,
            color: neutrals.gray.main
          },
          "&.MuiChip-colorYellow": {
            backgroundColor: accents.yellow.extraLight,
            color: accents.yellow.main
          }
        },
        outlined: {
          borderWidth: "1px",
          "&.MuiChip-colorRed": {
            color: accents.red.main,
            borderColor: accents.red.main
          },
          "&.MuiChip-colorBlue": {
            color: accents.blue.main,
            borderColor: accents.blue.main
          },
          "&.MuiChip-colorGreen": {
            color: accents.green.main,
            borderColor: accents.green.main
          },
          "&.MuiChip-colorGray": {
            color: neutrals.gray.main,
            borderColor: neutrals.gray.main
          },
          "&.MuiChip-colorYellow": {
            color: accents.yellow.main,
            borderColor: accents.yellow.main
          }
        }
      }
    }
  }
};

export const designTheme = createTheme(themeOptions);
