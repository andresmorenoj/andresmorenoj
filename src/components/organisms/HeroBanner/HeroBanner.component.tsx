import { contentData } from "@constants/index";

import { TextsContentContainer } from "@components/molecules";
import { Heading, Text, ImageFigure, Paragraph } from "@components/atoms";

import { StyledSectionContainer } from "./HeroBanner.styles";
import { ContactItems } from "@components/molecules";

export const HeroBanner: React.FC = () => (
  <StyledSectionContainer>
    <TextsContentContainer
      variant="black"
      title={
        <Heading
          className="container__title"
          level={1}
          size="extraJumbo"
          fontWeight="extraBold"
        >
          <Text variant="normal">{`${contentData.greet.content} `}</Text>
          <Text variant="semiBold">
            {`${contentData.name.content}.`}
            <br />
          </Text>
          <Text variant="semiBold">{`${contentData.job.content} `}</Text>
          <Text variant="outline">
            {`${contentData.job_title.content} `}
            <br/>
          </Text>
          <Text variant="normal">{`${contentData.location.content} `}</Text>
          <Text variant="semiBold">{`${contentData.location_city.content}`}</Text>
        </Heading>
      }
      description={
        <Paragraph color={"zinc500"}>
          <Text variant="normal">{`${contentData.short_description.content}`}</Text>
        </Paragraph>
      }
    />
    <ImageFigure src="/images/man.svg" width={100} />
    <ContactItems/>
  </StyledSectionContainer>
);
 