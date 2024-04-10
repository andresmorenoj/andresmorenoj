import { sectionsData } from "@constants/index";
import { MenuItem } from "@components/atoms";
import { StyledHeader, StyledNavList } from "./Header.styles";

export const Header: React.FC = () => {
  const navigationList = Object.values(sectionsData);
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          {navigationList.map((item) => (
            <li key={item.sectionRef}>
              <MenuItem label={item.label} sectionRef={`#${item.sectionRef}`} />
            </li>
          ))}
        </StyledNavList>
      </nav>
    </StyledHeader>
  );
};
