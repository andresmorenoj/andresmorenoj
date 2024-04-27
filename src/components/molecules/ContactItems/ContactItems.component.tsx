import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { IconAnchor } from "@components/molecules";
import { contactData } from "@constants/index";

import { StyledContactContainer } from './ContactItems.styles';

export const ContactItems: React.FC = () => {
  const contactValues = Object.values(contactData);
  const icons = [FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram];

  return (
    <StyledContactContainer>
      {contactValues.map((item, index) => (
          <li key={item.label}>
            <IconAnchor href={item.href} icon={icons[index]} variant="default" size={50}/>
          </li>
        ))}
    </StyledContactContainer>
  );
};
