import styled, {css} from 'styled-components';

export const StyledContactContainer = styled.ul(({theme}) => {
	return css`
		display: flex;
		gap: ${theme.measurements.small};
		align-self: start;
	`
})