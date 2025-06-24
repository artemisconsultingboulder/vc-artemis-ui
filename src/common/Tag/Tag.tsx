/** @module Tag */

import { Chip, type ChipProps } from "@mui/material";
import type { Color } from "../data/colors";

type TagProps = {
  children: string;
  className?: string;
  color?: Color;
  variant?: "filled" | "outlined";
  onClick?: ChipProps["onClick"];
};

const Tag = (props: TagProps): React.JSX.Element => {
  const {
    className = "",
    children,
    color = "primary",
    variant = "filled",
    onClick = (): void => {}
  } = props;

  return (
    <Chip
      label={children}
      variant={variant}
      color={color as ChipProps["color"]}
      className={className}
      onClick={onClick}
      size="medium"
    />
  );
};

export default Tag;
