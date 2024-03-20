type TTextsContentVariant = 'black' | 'white'

export interface ITextsContent {
  title: string;
  description: string;
	variant: TTextsContentVariant
}

export const TextsContentContainer: React.FC<ITextsContent> = ({
  title,
  description,
	variant
}) => {
  return (
    <div>
      {title}
      <p>{description}</p>
    </div>
  );
};
