import { DetailedHTMLProps, HTMLAttributes } from "react";
import { BaseComponentProps } from "../../common/models";

export default interface AdminMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
