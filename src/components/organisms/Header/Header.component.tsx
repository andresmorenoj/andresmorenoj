import { sectionsData } from "@constants/index";
import { MenuItem } from "@components/atoms";
import { StyledNavList } from "./Header.styles";

export const Header: React.FC = () => {
  const navigationList = Object.values(sectionsData);
  return (
    <header>
      <nav>
        <StyledNavList>
          {navigationList.map((item) => (
            <li key={item.sectionRef}>
              <MenuItem label={item.label} sectionRef={item.sectionRef} />
            </li>
          ))}
        </StyledNavList>
      </nav>
    </header>
  );
};
