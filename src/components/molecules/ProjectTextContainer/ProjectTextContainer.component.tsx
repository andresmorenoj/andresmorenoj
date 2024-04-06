import { TbExternalLink } from "react-icons/tb";
import { theme } from "@theme/theme.main";

import { Text } from "@components/atoms";

import {
  TextsContentContainer,
  ITextsContent,
} from "@components/molecules/TextsContentContainer/TextsContentContainer.component";

import {
  StyledHeading,
  StyledDescription,
  StyledAnchor,
} from "./ProjectTextContainer.styles";

interface IProjectTextContent extends Omit<ITextsContent, "variant"> {
  index: string;
}

export const ProjectTextContainer: React.FC<IProjectTextContent> = ({
  index,
  title,
  description,
}) => {
  return (
    <>
      <TextsContentContainer
        variant="black"
        title={
          <StyledHeading className="container__title" level={3} size="jumbo">
            <Text variant="bold">{index}</Text>
            <Text variant="bold">{title}</Text>
          </StyledHeading>
        }
        description={
          <>
            <StyledDescription className=".container__description">
              <Text variant="normal">{description}</Text>
            </StyledDescription>
            <StyledAnchor
              isDarkBackgound={true}
              useIconCard={false}
              variant="default"
              href="#"
              icon={TbExternalLink}
              color={theme.colors.secondary.zinc300}
            />
          </>
        }
      />
    </>
  );
};
