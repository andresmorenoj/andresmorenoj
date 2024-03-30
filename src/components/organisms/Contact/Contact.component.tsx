import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

import { IconAnchor } from "@components/molecules";
import { contactData } from "@constants/index";

import { StyledContactContainer } from './Contact.styles';

export const Contact: React.FC = () => {
  const contactValues = Object.values(contactData);
  const icons = [FaLinkedinIn, FaGithub, FaInstagram];

  return (
    <StyledContactContainer>
      {contactValues.map((item, index) => (
        <li key={item.label}>
          <IconAnchor href={item.href} icon={icons[index]} variant="default" />
        </li>
      ))}
    </StyledContactContainer>
  );
};
