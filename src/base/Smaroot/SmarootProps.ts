import { ColorScheme } from "../../common/literalTypes";
import { DivProps } from "../../components/Div";

export default interface SmarootProps extends DivProps {
  as?:
    | React.ElementType
    | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  colorScheme?: ColorScheme;
}
