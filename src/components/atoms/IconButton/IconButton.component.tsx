import { Icon, IIcon } from "@components/atoms/Icon/Icon.component";
import { StyledButton } from "./IconButton.styles";

interface IIconButton extends Pick<IIcon, "iconType"> {
  onClick: () => void;
}

export const IconButton: React.FC<IIconButton> = ({ onClick, iconType }) => {
  return (
    <StyledButton onClick={onClick}>
      <Icon iconType={iconType} size={2} />
    </StyledButton>
  );
};
