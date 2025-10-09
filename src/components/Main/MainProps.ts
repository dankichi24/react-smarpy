import { BaseComponentProps } from "../../common/models";
import React from "react";

export default interface MainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >, BaseComponentProps {
}
