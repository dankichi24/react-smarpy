import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { BaseComponentProps } from "../../common/models";

export default interface BreadcrumbItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    BaseComponentProps {
}
