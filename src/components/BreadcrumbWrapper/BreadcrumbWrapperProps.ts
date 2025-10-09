import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../common/models";

export default interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {}
