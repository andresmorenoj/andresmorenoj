import styled, { css } from "styled-components";

export const StyledSectionContainer = styled.section(({ theme }) => {
  return css`
    padding: 0 90px;

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: ${theme.measurements.extraExtraLarge};

		background: ${theme.colors.primary.neutralBlack};

    h2 {
      justify-self: center;
			color: ${theme.colors.primary.neutralWhite};
    }
  `;
});

export const StyledCardContainer = styled.ol(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.measurements.extraExtraLarge};
    padding: 0;
    margin: 0;

    & li:nth-child(even) {
      article {
        > :first-child {
          order: 2;
          justify-self: end;
        }
      }
    }
  `;
});

export const StyledListItem = styled.li(() => {
  return css`
    max-width: 90%;
  `
})