import { StyledContainer } from "./TextsContentContainer.styles";

type TTextsContentVariant = "black" | "white";

export interface ITextsContent {
  title: React.ReactNode;
  description: React.ReactNode;
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
