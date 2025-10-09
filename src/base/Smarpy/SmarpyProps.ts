import { SmarpyCssVariable } from "../../common/models";
import { SmarootProps } from "../Smaroot";

export default interface SmarpyProps extends SmarootProps {
  cssVariableSetting?: SmarpyCssVariable;
}
