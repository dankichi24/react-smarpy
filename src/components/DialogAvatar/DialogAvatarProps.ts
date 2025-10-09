import { BaseComponentProps } from "../../react-smarpy";

export default interface DialogAvatarProps
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    BaseComponentProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
