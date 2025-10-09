import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../common/models";
import { ColorName } from "../../common/literalTypes";

export default interface BreadcrumbProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    BaseComponentProps {
  colorName?: ColorName;
}
