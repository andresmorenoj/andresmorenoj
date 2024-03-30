import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import { IconAnchor } from "@components/molecules";
import { contactList } from "@constants/index";

import { StyledContactContainer } from './Contact.styles';

export const Contact: React.FC = () => {
  const contactValues = Object.values(contactList);
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
