import { sectionsList } from "@constants/index";
import { MenuItem } from "@components/atoms";
import { StyledHeader } from "./Header.styled";

export const Header: React.FC = () => {
  const navigationList = Object.values(sectionsList);
  return (
    <StyledHeader>
      {navigationList.map((item) => (
        <MenuItem
          key={item.sectionRef}
          label={item.label}
          sectionRef={item.sectionRef}
        />
      ))}
    </StyledHeader>
  );
};
