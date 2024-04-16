import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { sectionsData } from "@constants/index";
import { MenuItem, IconButton } from "@components/atoms";
import {
  StyledHeader,
  StyledNavContainer,
  StyledNavList,
} from "./Header.styles";
import { useScreenSize } from "@hooks/index";
import { RenderIf } from "@components/hoc";

export const Header: React.FC = () => {
  const { isLargeScreen } = useScreenSize();
  const [showHamburger, setShowHamburger] = useState(true);
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);
  
  const navigationList = Object.values(sectionsData);
  const menuDataLinks = navigationList.map((item) => (
    <li key={item.sectionRef}>
      <MenuItem label={item.label} sectionRef={`#${item.sectionRef}`} />
    </li>
  ));

  const handleResponsiveNav = () => {
    setShowHamburger(!showHamburger);
    setShowResponsiveNav(showHamburger);
  };

  return (
    <StyledHeader>
      <StyledNavContainer>
        <RenderIf when={isLargeScreen}>
          <StyledNavList>{menuDataLinks}</StyledNavList>
        </RenderIf>
        <RenderIf when={!isLargeScreen}>
          <RenderIf when={showHamburger}>
            <IconButton
              onClick={handleResponsiveNav}
              iconType={GiHamburgerMenu}
            />
          </RenderIf>
          <RenderIf when={showResponsiveNav}>
            <StyledNavList>{menuDataLinks}</StyledNavList>
            <RenderIf when={!showHamburger}>
              <IconButton onClick={handleResponsiveNav} iconType={IoClose} />
            </RenderIf>
          </RenderIf>
        </RenderIf>
      </StyledNavContainer>
    </StyledHeader>
  );
};
