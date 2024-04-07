import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { IconAnchor } from "@components/molecules";
import { contactData } from "@constants/index";

import { StyledContactContainer } from './Contact.styles';

export const Contact: React.FC = () => {
  const contactValues = Object.values(contactData);
  const icons = [FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp];

  return (
    <StyledContactContainer>
      {contactValues.map((item, index) => {
        console.log(item);
        
        return (
          <li key={item.label}>
            <IconAnchor href={item.href} icon={icons[index]} variant="default" />
          </li>
        )
      })}
    </StyledContactContainer>
  );
};
