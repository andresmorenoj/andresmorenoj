import { Icon } from "@components/atoms/Icon/Icon.component";
import { IconType } from "react-icons";

import { StyledWrapper } from "./IconCard.styles";
import { Text } from "@components/atoms";
import { RenderIf } from "@components/hoc";

export type TVariant = "default" | "withLabel";

export interface IIConCard {
  variant: TVariant;
  icon: IconType;
	label?: string;
  size?: number;
}

export const IconCard: React.FC<IIConCard> = ({
  variant = "default",
  icon,
	label,
}) => {

  return (
    <StyledWrapper variant={variant}>
      <Icon iconType={icon} size={variant === "withLabel" ? 5 : 2} />
      <RenderIf when={variant === 'withLabel'}>
        <Text variant="semiBold">{label}</Text>
      </RenderIf>
    </StyledWrapper>
  );
};
