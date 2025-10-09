import { Interpolation, Theme } from "@emotion/react";
import {
  BorderCollapse,
  BorderDetailProps,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorProps,
  FontSize,
  FontWeight,
} from "../literalTypes";

export default interface BaseComponentProps {
  fore?: {
    color?: ColorProps;
    fontSize?: FontSize;
    fontWeight?: FontWeight;
    isItalic?: boolean;
  };
  back?: {
    color?: ColorProps;
  };
  highlighter?: {
    color?: ColorProps;
  };
  border?: {
    color?: ColorProps;
    collapse?: BorderCollapse;
    radius?: BorderRadius;
    style: BorderStyle;
    width?: BorderWidth;
    top?: BorderDetailProps;
    bottom?: BorderDetailProps;
    left?: BorderDetailProps;
    right?: BorderDetailProps;
  };
  spacing?: {
    margin?:
      | {
          x?: number | string;
          y?: number | string;
          top?: number | string;
          left?: number | string;
          bottom?: number | string;
          right?: number | string;
        }
      | number
      | string;
    padding?:
      | {
          x?: number | string;
          y?: number | string;
          top?: number | string;
          left?: number | string;
          bottom?: number | string;
          right?: number | string;
        }
      | number
      | string;
  };
  css?: Interpolation<Theme>;
}
