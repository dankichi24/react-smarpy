import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../common/models";

export default interface ParagraphProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    BaseComponentProps {}
