import { sectionsList } from "@constants/index";
import { MenuItem } from "@components/atoms";
import { StyledNavList } from "./Header.styled";

export const Header: React.FC = () => {
  const navigationList = Object.values(sectionsList);
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
