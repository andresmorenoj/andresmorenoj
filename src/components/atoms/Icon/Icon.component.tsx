import { IconType, IconContext } from "react-icons";

export interface IIcon {
  iconType: IconType;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IIcon> = ({ iconType, size, color, ...props }) => (
  <IconContext.Provider
    value={{
      color: color || "black",
      className: "global-icon",
      size: (size || 2) + 'em',
    }}
  >
    <i>{iconType(props)}</i>
  </IconContext.Provider>
);
