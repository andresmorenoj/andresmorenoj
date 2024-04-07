const getWhatsappMessage = (message: string): string => {
	console.log('message', message);
	
  return message.split(" ").reduce((acc, text) => `${acc}%20${text}`, '');
};

const WHATSAPP_MESSAGE = "Hello Andrés, I just visited your personal web site and I would like to get in touch with you."

enum CONTACT {
  LINKEDIN = "https://www.linkedin.com/in/andres-moreno-jf/",
  GITHUB = "https://github.com/andresmorenoj",
  INSTAGRAM = "https://www.instagram.com/andres.moreno.jf/",
  WHATSAPP = "https://wa.me/+573148095997?text=",
}

const keys = ["linkedin", "github", "instagram", "whatsapp"] as const;

type TValidPageKey = (typeof keys)[number];

interface IProperties {
  label: string;
  href: string;
}

type TContact = {
  [key in TValidPageKey]: IProperties;
};

export const contactData: TContact = {
  linkedin: {
    label: "LinkedIn",
    href: CONTACT.LINKEDIN,
  },
  github: {
    label: "Github",
    href: CONTACT.GITHUB,
  },
  instagram: {
    label: "Instagram",
    href: CONTACT.INSTAGRAM,
  },
	whatsapp: {
		label: "Whatsapp",
		href: `${CONTACT.WHATSAPP}${getWhatsappMessage(WHATSAPP_MESSAGE)}`
	}
};
