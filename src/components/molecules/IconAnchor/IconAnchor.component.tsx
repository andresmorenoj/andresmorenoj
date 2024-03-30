import {
  IconCard,
  IIConCard,
} from "@components/molecules/IconCard/IconCard.component";

import { StyledIconAnchor } from "./IconAnchor.styles";

interface IIconAnchor extends IIConCard {
  href: string;
}

export const IconAnchor: React.FC<IIconAnchor> = ({ href, ...props }) => (
  <StyledIconAnchor href={href} target="_blank" rel="noopener noreferrer">
    <IconCard {...props} />
  </StyledIconAnchor>
);
