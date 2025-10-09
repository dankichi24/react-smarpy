import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";

export default interface AdminNavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  colorName?: ColorName;
}
