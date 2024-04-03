import {
  INTRODUCTION_GREET,
  INTRODUCTION_NAME,
  INTRODUCTION_JOB,
  INTRODUCTION_JOB_TITLE,
  INTRODUCTION_LOCATION,
  INTRODUCTION_LOCATION_CITY,
  INTRODUCTION_DESCRIPTION,
  MY,
  SKILLS_TITLE,
  EXPERIENCE_TITLE,
  ABOUT,
  ME,
  ABOUT_ME_P1,
  ABOUT_ME_P2,
  ABOUT_ME_P3,
  ABOUT_ME_P4
} from "./contentData.constants";

enum CONTENT {
  GREET = INTRODUCTION_GREET,
  NAME = INTRODUCTION_NAME,
  JOB = INTRODUCTION_JOB,
  JOB_TITLE = INTRODUCTION_JOB_TITLE,
  LOCATION = INTRODUCTION_LOCATION,
  LOCATION_CITY = INTRODUCTION_LOCATION_CITY,
  SHORT_DESCRIPTION = INTRODUCTION_DESCRIPTION,
  PRE_MY = MY,
  SKILLS = SKILLS_TITLE,
  EXPERIENCE = EXPERIENCE_TITLE,
  PRE_ABOUT = ABOUT,
  POST_ME = ME,
  ABOUT_ME_1 = ABOUT_ME_P1,
  ABOUT_ME_2 = ABOUT_ME_P2,
  ABOUT_ME_3 = ABOUT_ME_P3,
  ABOUT_ME_4 = ABOUT_ME_P4,
}

const keys = [
  "greet",
  "name",
  "job",
  "job_title",
  "location",
  "location_city",
  "short_description",
  "pre_my",
  "skills",
  "pre_about",
  "post_me",
  "experience",
  "about_me_p1",
  "about_me_p2",
  "about_me_p3",
  "about_me_p4"
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
	},
  pre_my: {
    content: CONTENT.PRE_MY
  },
  skills: {
    content: CONTENT.SKILLS
  },
  experience: {
    content: CONTENT.EXPERIENCE
  },
  pre_about: {
    content: CONTENT.PRE_ABOUT
  },
  post_me: {
    content: CONTENT.POST_ME
  },
  about_me_p1: {
    content: CONTENT.ABOUT_ME_1
  },
  about_me_p2: {
    content: CONTENT.ABOUT_ME_2
  },
  about_me_p3: {
    content: CONTENT.ABOUT_ME_3
  },
  about_me_p4: {
    content: CONTENT.ABOUT_ME_4
  },

};
