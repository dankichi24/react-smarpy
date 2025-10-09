import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../common/models";

export default interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {}
