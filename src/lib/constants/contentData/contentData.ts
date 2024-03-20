import { INTRODUCTION_NAME, INTRODUCTION_JOB_WITH_LOCATION, INTRODUCTION_DESCRIPTION } from './contentData.constants';

enum CONTENT {
	INTRODUCTION_1 = INTRODUCTION_NAME,
	INTRODUCTION_2 = INTRODUCTION_JOB_WITH_LOCATION,
	SHORT_DESCRIPTION = INTRODUCTION_DESCRIPTION
};

const keys = [
	'introduction_1',
	'introduction_2',
	'short_description'
] as const;

type TValidContentKey = typeof keys[number];

interface IContent {
	content: string;
};

type TContent = {
	[key in TValidContentKey]: IContent
}

export const contentData: TContent =  {
	introduction_1: {
		content: CONTENT.INTRODUCTION_1
	},
	introduction_2: {
		content: CONTENT.INTRODUCTION_2,
	},
	short_description: {
		content: CONTENT.SHORT_DESCRIPTION
	}
}