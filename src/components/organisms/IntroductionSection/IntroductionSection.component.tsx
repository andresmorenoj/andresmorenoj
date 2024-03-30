import { FaAnchorLock } from "react-icons/fa6";
import { contentData } from "@constants/index";

import { TextsContentContainer } from "@components/molecules";
import { Heading, Text, ImageFigure } from "@components/atoms";

import { StyledSectionContainer } from "./IntroductionSection.styled";

export const IntroductionSection: React.FC = () => (
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
            {`${contentData.name.content}`}
            <br />
          </Text>
          <Text variant="semiBold">{`${contentData.job.content} `}</Text>
          <Text variant="outline">
            {`${contentData.job_title.content}`}
            <br />
          </Text>
          <Text variant="normal">{`${contentData.location.content} `}</Text>
          <Text variant="semiBold">{`${contentData.location_city.content}`}</Text>
        </Heading>
      }
      description={
        <p className="container__description">
          <Text variant="normal">{`${contentData.short_description.content}`}</Text>
        </p>
      }
    />
    <ImageFigure width={100} />
  </StyledSectionContainer>
);
 