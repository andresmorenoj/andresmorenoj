import { StyledContainer } from "./TextsContentContainer.styles";

type TTextsContentVariant = "black" | "white";

export interface ITextsContent {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  variant: TTextsContentVariant;
}

export const TextsContentContainer: React.FC<ITextsContent> = ({
  title,
  description,
  variant,
}) => {
  
  return (
    <StyledContainer variant={variant}>
      {title}
      {description}
    </StyledContainer>
  );
};
