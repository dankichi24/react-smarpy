import { ColorName } from "../../common/literalTypes";
import { BaseComponentProps } from "../../common/models";
import { DivProps } from "../../react-smarpy";

export default interface GinghamProps extends DivProps, BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  colorName?: ColorName;
  degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90;
}
