/** @module colors */

// Color name constants
export const COLOR_BLACK = "black" as const;
export const COLOR_WHITE = "white" as const;
export const COLOR_GRAY = "gray" as const;
export const COLOR_GRAY_EXTRA_DARK = "gray-extra-dark" as const;
export const COLOR_GRAY_DARK = "gray-dark" as const;
export const COLOR_GRAY_MEDIUM = "gray-medium" as const;
export const COLOR_GRAY_LIGHT = "gray-light" as const;
export const COLOR_GRAY_EXTRA_LIGHT = "gray-extra-light" as const;
export const COLOR_YELLOW = "yellow" as const;
export const COLOR_YELLOW_EXTRA_DARK = "yellow-extra-dark" as const;
export const COLOR_YELLOW_DARK = "yellow-dark" as const;
export const COLOR_YELLOW_LIGHT = "yellow-light" as const;
export const COLOR_YELLOW_EXTRA_LIGHT = "yellow-extra-light" as const;
export const COLOR_GREEN = "green" as const;
export const COLOR_GREEN_EXTRA_DARK = "green-extra-dark" as const;
export const COLOR_GREEN_DARK = "green-dark" as const;
export const COLOR_GREEN_LIGHT = "green-light" as const;
export const COLOR_GREEN_EXTRA_LIGHT = "green-extra-light" as const;
export const COLOR_RED = "red" as const;
export const COLOR_RED_EXTRA_DARK = "red-extra-dark" as const;
export const COLOR_RED_DARK = "red-dark" as const;
export const COLOR_RED_LIGHT = "red-light" as const;
export const COLOR_RED_EXTRA_LIGHT = "red-extra-light" as const;
export const COLOR_BLUE = "blue" as const;
export const COLOR_BLUE_EXTRA_DARK = "blue-extra-dark" as const;
export const COLOR_BLUE_DARK = "blue-dark" as const;
export const COLOR_BLUE_LIGHT = "blue-light" as const;
export const COLOR_BLUE_EXTRA_LIGHT = "blue-extra-light" as const;
export const COLOR_SKY_BLUE = "sky-blue" as const;
export const COLOR_SKY_BLUE_EXTRA_DARK = "sky-blue-extra-dark" as const;
export const COLOR_SKY_BLUE_DARK = "sky-blue-dark" as const;
export const COLOR_SKY_BLUE_LIGHT = "sky-blue-light" as const;
export const COLOR_SKY_BLUE_EXTRA_LIGHT = "sky-blue-extra-light" as const;
export const COLOR_SALMON = "salmon" as const;
export const COLOR_SALMON_DARK = "salmon-dark" as const;
export const COLOR_SALMON_LIGHT = "salmon-light" as const;
export const COLOR_SALMON_EXTRA_LIGHT = "salmon-extra-light" as const;

export const COLORS = [
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_GRAY,
  COLOR_GRAY_EXTRA_DARK,
  COLOR_GRAY_DARK,
  COLOR_GRAY_MEDIUM,
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_EXTRA_LIGHT,
  COLOR_YELLOW,
  COLOR_YELLOW_EXTRA_DARK,
  COLOR_YELLOW_DARK,
  COLOR_YELLOW_LIGHT,
  COLOR_YELLOW_EXTRA_LIGHT,
  COLOR_GREEN,
  COLOR_GREEN_EXTRA_DARK,
  COLOR_GREEN_DARK,
  COLOR_GREEN_LIGHT,
  COLOR_GREEN_EXTRA_LIGHT,
  COLOR_RED,
  COLOR_RED_EXTRA_DARK,
  COLOR_RED_DARK,
  COLOR_RED_LIGHT,
  COLOR_RED_EXTRA_LIGHT,
  COLOR_BLUE,
  COLOR_BLUE_EXTRA_DARK,
  COLOR_BLUE_DARK,
  COLOR_BLUE_LIGHT,
  COLOR_BLUE_EXTRA_LIGHT,
  COLOR_SKY_BLUE,
  COLOR_SKY_BLUE_EXTRA_DARK,
  COLOR_SKY_BLUE_DARK,
  COLOR_SKY_BLUE_LIGHT,
  COLOR_SKY_BLUE_EXTRA_LIGHT,
  COLOR_SALMON,
  COLOR_SALMON_DARK,
  COLOR_SALMON_LIGHT,
  COLOR_SALMON_EXTRA_LIGHT
] as const;

export type Color = (typeof COLORS)[number];

// Hex color values
export const HEX_COLOR_BLACK = "#141414";
export const HEX_COLOR_EBONY = "#2c2c2c";
export const HEX_COLOR_WHITE = "#ffffff";

export const HEX_COLOR_GRAY_MAIN = "#ececec";
export const HEX_COLOR_GRAY_MEDIUM = "#e1e1e1";
export const HEX_COLOR_GRAY_DARK = "#c9c9c9";
export const HEX_COLOR_GRAY_EXTRA_DARK = "#868686";
export const HEX_COLOR_GRAY_LIGHT = "#f6f6f6";
export const HEX_COLOR_GRAY_EXTRA_LIGHT = "#fafafc";

export const HEX_COLOR_RED_MAIN = "#c15c49";
export const HEX_COLOR_RED_EXTRA_DARK = "#944738";
export const HEX_COLOR_RED_DARK = "#ac5241";
export const HEX_COLOR_RED_LIGHT = "#e0aea4";
export const HEX_COLOR_RED_EXTRA_LIGHT = "#f9efed";

export const HEX_COLOR_YELLOW_MAIN = "#e2a814";
export const HEX_COLOR_YELLOW_EXTRA_DARK = "#af810b";
export const HEX_COLOR_YELLOW_DARK = "#cd9609";
export const HEX_COLOR_YELLOW_LIGHT = "#ebce83";
export const HEX_COLOR_YELLOW_EXTRA_LIGHT = "#fcf4e4";

export const HEX_COLOR_GREEN_MAIN = "#67a15e";
export const HEX_COLOR_GREEN_EXTRA_DARK = "#4e7b47";
export const HEX_COLOR_GREEN_DARK = "#5a8e53";
export const HEX_COLOR_GREEN_LIGHT = "#b3d0af";
export const HEX_COLOR_GREEN_EXTRA_LIGHT = "#f0f6ef";

export const HEX_COLOR_BLUE_MAIN = "#39559d";
export const HEX_COLOR_BLUE_EXTRA_DARK = "#2b427b";
export const HEX_COLOR_BLUE_DARK = "#324c8e";
export const HEX_COLOR_BLUE_LIGHT = "#99a5c7";
export const HEX_COLOR_BLUE_EXTRA_LIGHT = "#ebeef5";

export const HEX_COLOR_SKY_BLUE_MAIN = "#29a8dd";
export const HEX_COLOR_SKY_BLUE_EXTRA_DARK = "#12587a";
export const HEX_COLOR_SKY_BLUE_DARK = "#1481b5";
export const HEX_COLOR_SKY_BLUE_LIGHT = "#c0e5f7";
export const HEX_COLOR_SKY_BLUE_EXTRA_LIGHT = "#e4f1fb";

export const HEX_COLOR_SALMON_MAIN = "#D44C4C";
export const HEX_COLOR_SALMON_DARK = "#B03A3A";
export const HEX_COLOR_SALMON_LIGHT = "#E67A7A";
export const HEX_COLOR_SALMON_EXTRA_LIGHT = "#F8E8E8";

export const HEX_COLOR_PURPLE_MAIN = "#9000ff";

export const COLOR_TO_HEX_MAP: Record<Color, string> = {
  [COLOR_BLACK]: HEX_COLOR_EBONY,
  [COLOR_WHITE]: HEX_COLOR_WHITE,
  [COLOR_GRAY]: HEX_COLOR_GRAY_MAIN,
  [COLOR_GRAY_MEDIUM]: HEX_COLOR_GRAY_MEDIUM,
  [COLOR_GRAY_EXTRA_DARK]: HEX_COLOR_GRAY_EXTRA_DARK,
  [COLOR_GRAY_DARK]: HEX_COLOR_GRAY_DARK,
  [COLOR_GRAY_LIGHT]: HEX_COLOR_GRAY_LIGHT,
  [COLOR_GRAY_EXTRA_LIGHT]: HEX_COLOR_GRAY_EXTRA_LIGHT,
  [COLOR_YELLOW]: HEX_COLOR_YELLOW_MAIN,
  [COLOR_YELLOW_EXTRA_DARK]: HEX_COLOR_YELLOW_EXTRA_DARK,
  [COLOR_YELLOW_DARK]: HEX_COLOR_YELLOW_DARK,
  [COLOR_YELLOW_LIGHT]: HEX_COLOR_YELLOW_LIGHT,
  [COLOR_YELLOW_EXTRA_LIGHT]: HEX_COLOR_YELLOW_EXTRA_LIGHT,
  [COLOR_GREEN]: HEX_COLOR_GREEN_MAIN,
  [COLOR_GREEN_EXTRA_DARK]: HEX_COLOR_GREEN_EXTRA_DARK,
  [COLOR_GREEN_DARK]: HEX_COLOR_GREEN_DARK,
  [COLOR_GREEN_LIGHT]: HEX_COLOR_GREEN_LIGHT,
  [COLOR_GREEN_EXTRA_LIGHT]: HEX_COLOR_GREEN_EXTRA_LIGHT,
  [COLOR_RED]: HEX_COLOR_RED_MAIN,
  [COLOR_RED_EXTRA_DARK]: HEX_COLOR_RED_EXTRA_DARK,
  [COLOR_RED_DARK]: HEX_COLOR_RED_DARK,
  [COLOR_RED_LIGHT]: HEX_COLOR_RED_LIGHT,
  [COLOR_RED_EXTRA_LIGHT]: HEX_COLOR_RED_EXTRA_LIGHT,
  [COLOR_BLUE]: HEX_COLOR_BLUE_MAIN,
  [COLOR_BLUE_EXTRA_DARK]: HEX_COLOR_BLUE_EXTRA_DARK,
  [COLOR_BLUE_DARK]: HEX_COLOR_BLUE_DARK,
  [COLOR_BLUE_LIGHT]: HEX_COLOR_BLUE_LIGHT,
  [COLOR_BLUE_EXTRA_LIGHT]: HEX_COLOR_BLUE_EXTRA_LIGHT,
  [COLOR_SKY_BLUE]: HEX_COLOR_SKY_BLUE_MAIN,
  [COLOR_SKY_BLUE_EXTRA_DARK]: HEX_COLOR_SKY_BLUE_EXTRA_DARK,
  [COLOR_SKY_BLUE_DARK]: HEX_COLOR_SKY_BLUE_DARK,
  [COLOR_SKY_BLUE_LIGHT]: HEX_COLOR_SKY_BLUE_LIGHT,
  [COLOR_SKY_BLUE_EXTRA_LIGHT]: HEX_COLOR_SKY_BLUE_EXTRA_LIGHT,
  [COLOR_SALMON]: HEX_COLOR_SALMON_MAIN,
  [COLOR_SALMON_DARK]: HEX_COLOR_SALMON_DARK,
  [COLOR_SALMON_LIGHT]: HEX_COLOR_SALMON_LIGHT,
  [COLOR_SALMON_EXTRA_LIGHT]: HEX_COLOR_SALMON_EXTRA_LIGHT
};
