import { contentData } from "@constants/index";

import { Heading, Paragraph, Text } from "@components/atoms";
import { TextsContentContainer } from "@components/molecules/TextsContentContainer/TextsContentContainer.component";
import {ContactItems} from '@components/molecules/ContactItems/ContactItems.component';

import { StyledFooterContactContainer } from "./ContactFooterContainer.styles";

export const ContactFooterContainer: React.FC = () => {
  return (
    <StyledFooterContactContainer>
      <TextsContentContainer
        title={
          <>
            <Heading level={3} size="jumbo" fontWeight="extraBold">
              <Text variant="bold">{`${contentData.ready.content} `}</Text>
              <Text variant="outline">{`${contentData.craft.content} `}</Text>
              <Text variant="bold">{`${contentData.engaging.content}`}</Text>
            </Heading>
            <Heading level={4} size="extraExtraLarge" fontWeight="extraBold">
              <Text variant="bold">{`${contentData.contact_title.content}`}</Text>
            </Heading>
          </>
        }
        description={
          <Paragraph>
            <Text variant="normal">{`${contentData.contact_description.content}`}</Text>
          </Paragraph>
        }
        variant="black"
      />
      <ContactItems/>
    </StyledFooterContactContainer>
  );
};
