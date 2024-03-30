import { Icon } from "@components/atoms/Icon/Icon.component";
import { IconType } from "react-icons";

import { StyledWrapper } from "./IconCard.styles";
import { Text } from "@components/atoms";
import { RenderIf } from "@components/hoc";

export type TVariant = "default" | "withLabel";

export interface IIConCard {
  variant: TVariant;
  icon: IconType;
	label?: string
}

export const IconCard: React.FC<IIConCard> = ({
  variant = "default",
  icon,
	label
}) => {
  return (
    <StyledWrapper variant={variant}>
      <Icon iconType={icon} size={variant === "default" ? 2 : 5} />
      <RenderIf when={variant === 'withLabel'}>
        <Text variant="semiBold">{label}</Text>
      </RenderIf>
    </StyledWrapper>
  );
};
