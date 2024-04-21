import { TbExternalLink } from "react-icons/tb";
import { theme } from "@theme/theme.main";

import { useScreenSize } from "@hooks/index";

import { Paragraph, Text, THeadingSize } from "@components/atoms";
import { IconAnchor } from '@components/molecules/IconAnchor/IconAnchor.component'

import {
  TextsContentContainer,
  ITextsContent,
} from "@components/molecules/TextsContentContainer/TextsContentContainer.component";

import {
  StyledHeading,
} from "./ProjectTextContainer.styles";

interface IProjectTextContent extends Omit<ITextsContent, "variant"> {
  index: string;
  href: string;
}

export const ProjectTextContainer: React.FC<IProjectTextContent> = ({
  index,
  title,
  description,
  href
}) => {
  const { isLargeScreen, isMediumScreen } = useScreenSize();
  
  const headingSize: THeadingSize = isLargeScreen
    ? "extraJumbo"
    : isMediumScreen
    ? "extraExtraLarge"
    : "extraLarge";
  return (
    <>
      <TextsContentContainer
        variant="white"
        title={
          <StyledHeading className="container__title" level={3} size={headingSize}>
            <Text variant="bold">{index}</Text>
            <Text variant="bold">{title}</Text>
          </StyledHeading>
        }
        description={
          <>
            <Paragraph>
              <Text variant="normal">{description}</Text>
            </Paragraph>
            <IconAnchor
              href={href}
              useIconCard={false}
              variant="default"
              icon={TbExternalLink}
              color={theme.colors.secondary.zinc300}
            />
          </>
        }
      />
    </>
  );
};
