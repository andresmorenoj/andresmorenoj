enum SKILLS {
	TYPESCRIPT = 'TypeScript',
	REACT = 'React',
	NEXTJS = 'NextJs',
	JAVASCRIPT = 'JavaScript',
	TAILWIND = 'Tailwind',
	STYLED_COMPONENTS = 'Styled-Components',
	GIT = 'Git',
	STORYBOOK = 'Storybook',
	JEST = 'Jest',
	ACCESSIBILITY = 'Accessibility'
}

const keys = [
	'typescript',
	'react',
	'nextjs',
	'javescript',
	'tailwind',
	'styledComponents',
	'git',
	'storybook',
	'jest',
	'accessibility'
] as const;

type TValidPageKey = typeof keys[number];

interface IProperties {
	label: string;
}

type TSkill = {
	[key in TValidPageKey]: IProperties
}

export const skillsData: TSkill = {
	typescript: {
		label: SKILLS.TYPESCRIPT
	},
	react: {
		label: SKILLS.REACT
	},
	nextjs: {
		label: SKILLS.NEXTJS
	},
	javescript: {
		label: SKILLS.JAVASCRIPT
	},
	tailwind: {
		label: SKILLS.TAILWIND
	},
	styledComponents: {
		label: SKILLS.STYLED_COMPONENTS
	},
	git: {
		label: SKILLS.GIT
	},
	storybook: {
		label: SKILLS.STORYBOOK
	},
	jest: {
		label: SKILLS.JEST
	},
	accessibility: {
		label: SKILLS.ACCESSIBILITY
	}
};
