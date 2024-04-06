import { Icon } from "@components/atoms/Icon/Icon.component";
import {
  IconCard,
  IIConCard,
} from "@components/molecules/IconCard/IconCard.component";

import { StyledIconAnchor } from "./IconAnchor.styles";
import { RenderIf } from "@components/hoc";

export interface IIconAnchor extends IIConCard {
  href: string;
  useIconCard?: boolean;
  isDarkBackgound?: boolean;
  color?: string;
}

export const IconAnchor: React.FC<IIconAnchor> = ({
  href,
  useIconCard = true,
  isDarkBackgound = false,
  color,
  ...props
}) => (
  <StyledIconAnchor isDarkBackgound={isDarkBackgound} href={href} target="_blank" rel="noopener noreferrer">
    <RenderIf when={useIconCard}>
      <IconCard {...props} />
    </RenderIf>
    <RenderIf when={!useIconCard}>
      <Icon iconType={props.icon} color={color} />
    </RenderIf>
  </StyledIconAnchor>
);
