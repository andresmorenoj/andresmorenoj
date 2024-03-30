enum NAVIGATION {
	ABOUTME = 'About Me',
	SKILLS = 'Skills',
	EXPERIENCE = 'My Experience',
	PROJECTS = 'My Projects'
}

const keys = [
	'aboutMe',
	'skills',
	'myExperience',
	'myProjects'
] as const;

type TValidPageKey = typeof keys[number];

export interface ISection {
	label: string;
	sectionRef: string;
}

type TNavigation = {
	[key in TValidPageKey]: ISection
}

export const sectionsData: TNavigation = {
	aboutMe: {
		label: NAVIGATION.ABOUTME,
		sectionRef: '#aboutMe'
	},
	skills: {
		label: NAVIGATION.SKILLS,
		sectionRef: '#skills'
	},
	myExperience: {
		label: NAVIGATION.EXPERIENCE,
		sectionRef: '#experience'
	},
	myProjects: {
		label: NAVIGATION.PROJECTS,
		sectionRef: '#projects'
	}
};
