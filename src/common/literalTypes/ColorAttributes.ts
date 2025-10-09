import ColorLightness from "./ColorLightness";
import ColorName from "./ColorName";

type ColorAttributes = {
  name: ColorName;
  lightness: ColorLightness;
  alpha?: number;
};

export default ColorAttributes;
