import { DivProps } from "../../components/Div";

export default interface AdminProps extends DivProps  {
  isSidebarCollapse?: boolean;
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
