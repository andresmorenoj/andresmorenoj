enum CONTACT {
	LINKEDIN = 'https://www.linkedin.com/in/andres-moreno-jf/',
	GITHUB = 'https://github.com/andresmorenoj',
	INSTAGRAM = 'https://www.instagram.com/andres.moreno.jf/',
}

const keys = [
	'linkedin',
	'github',
	'instagram',
] as const;

type TValidPageKey = typeof keys[number];

interface IProperties {
	label: string;
	href: string;
}

type TContact = {
	[key in TValidPageKey]: IProperties
}

export const contactData: TContact = {
	linkedin: {
		label: 'LinkedIn',
		href: CONTACT.LINKEDIN
	}, 
	github: {
		label: 'Github',
		href: CONTACT.GITHUB
	},
	instagram: {
		label: 'Instagram',
		href: CONTACT.INSTAGRAM
	}
};
