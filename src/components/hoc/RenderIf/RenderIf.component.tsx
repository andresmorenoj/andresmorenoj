import { PropsWithChildren } from 'react';
interface IRenderIfProps extends PropsWithChildren{
  when: boolean;
}

/**
 * This component is just sugar syntax for conditionally rendering something or not
 * keeping a JSX syntax in the code and avoiding bad practices
 *
 * To consider:
 * https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8
 */
export const RenderIf: React.FC<IRenderIfProps> = ({ when, children }) =>
  when ? <>{children}</> : null;