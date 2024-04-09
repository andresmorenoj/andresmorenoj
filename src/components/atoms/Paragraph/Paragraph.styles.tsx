import styled, {css} from 'styled-components';
import { IParagraph } from './Paragraph.component';

export const StyledParagraph = styled.p<IParagraph>(({theme, color}) => {
	return css`
	color: ${color ? theme.colors.secondary[color] : theme.colors.secondary.zinc300};
	line-height: ${theme.measurements.medium};
	font-size: ${theme.typography.sizes.medium};
	`
})