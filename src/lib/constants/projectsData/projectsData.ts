import {GREATMINDS, GIFOS, RESTAURANT_API, POPCAST, IProjectsData} from './projectsData.constants';

const keys = ["greatminds", "gifos", "restaurant_api", "podcast"] as const;

type TValidProjectKey = (typeof keys)[number];

type TProjects = {
	[key in TValidProjectKey]: IProjectsData
};

export const projectsData: TProjects = {
	greatminds: {
		title: GREATMINDS.title,
		description: GREATMINDS.description,
		href: GREATMINDS.href,
		imgUrl: GREATMINDS.imgUrl
	},
	gifos: {
		title: GIFOS.title,
		description: GIFOS.description,
		href: GIFOS.href,
		imgUrl: GIFOS.imgUrl
	},
	restaurant_api: {
		title: RESTAURANT_API.title,
		description: RESTAURANT_API.description,
		href: RESTAURANT_API.href,
		imgUrl: RESTAURANT_API.imgUrl
	},
	podcast: {
		title: POPCAST.title,
		description: POPCAST.description,
		href: POPCAST.href,
		imgUrl: POPCAST.imgUrl
	}
}