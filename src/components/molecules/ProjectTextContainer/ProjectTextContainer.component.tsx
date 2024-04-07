import { TbExternalLink } from "react-icons/tb";
import { theme } from "@theme/theme.main";

import { Paragraph, Text } from "@components/atoms";
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
  return (
    <>
      <TextsContentContainer
        variant="white"
        title={
          <StyledHeading className="container__title" level={3} size="jumbo">
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
