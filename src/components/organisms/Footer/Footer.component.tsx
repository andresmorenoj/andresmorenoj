import { contentData } from "@constants/index";

import { Heading, Paragraph, Text } from "@components/atoms";
import {
  ContactFooterContainer,
	TextsContentContainer,
} from "@components/molecules";

import { StyledFooterContainer } from "./Footer.styles";

export const Footer: React.FC = () => (
  <StyledFooterContainer>
		<TextsContentContainer variant="black" title={
			<Heading level={3} size="jumbo">
				<Text variant="bold">{`${contentData.name.content}`}</Text>
			</Heading>
		}
		description={
			<Paragraph color="zinc500">
				<Text variant="normal">{`${contentData.job.content} `}</Text>
				<Text variant="semiBold">{`${contentData.job_title.content}`}</Text>
			</Paragraph>
		}
		/>
    <ContactFooterContainer />
  </StyledFooterContainer>
);
