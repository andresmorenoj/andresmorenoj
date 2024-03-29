import {
  INTRODUCTION_GREET,
  INTRODUCTION_NAME,
  INTRODUCTION_JOB,
  INTRODUCTION_JOB_TITLE,
  INTRODUCTION_LOCATION,
  INTRODUCTION_LOCATION_CITY,
  INTRODUCTION_DESCRIPTION,
} from "./contentData.constants";

enum CONTENT {
  GREET = INTRODUCTION_GREET,
  NAME = INTRODUCTION_NAME,
  JOB = INTRODUCTION_JOB,
  JOB_TITLE = INTRODUCTION_JOB_TITLE,
  LOCATION = INTRODUCTION_LOCATION,
  LOCATION_CITY = INTRODUCTION_LOCATION_CITY,
  SHORT_DESCRIPTION = INTRODUCTION_DESCRIPTION,
}

const keys = [
  "greet",
  "name",
  "job",
  "job_title",
  "location",
  "location_city",
  "short_description",
] as const;

type TValidContentKey = (typeof keys)[number];

interface IContent {
  content: string;
}

type TContent = {
  [key in TValidContentKey]: IContent;
};

export const contentData: TContent = {
  greet: {
		content: CONTENT.GREET
	},
	name: {
		content: CONTENT.NAME
	},
	job: {
		content: CONTENT.JOB
	},
	job_title: {
		content: CONTENT.JOB_TITLE
	},
	location: {
		content: CONTENT.LOCATION
	},
	location_city: {
		content: CONTENT.LOCATION_CITY
	},
	short_description: {
		content: CONTENT.SHORT_DESCRIPTION
	}
};
