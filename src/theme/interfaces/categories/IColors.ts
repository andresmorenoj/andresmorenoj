export type TColor = `#${string}`;

export interface IColors {
  primary: {
     neutralBlack: TColor;
		 neutralWhite: TColor;
		 neutral: TColor
  };

	secondary: {
		zinc100: TColor;
		zinc200: TColor;
		zinc300: TColor;
		zinc500: TColor;
		zinc800: TColor;
	}

	error: {
		base: TColor
	}
}
