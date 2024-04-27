export interface IExperienceData {
  title: string;
  fromDate: Date;
  toDate: Date | string;
  description: string;
}


export const GLOBANT: IExperienceData = {
  title: "Globant",
  fromDate: new Date(2020, 11, 16),
  toDate: "present",
  description:
    "For more than 3 years, I've played a key role in an education project, designing a user-friendly interface (UI) that empowered students to seamlessly complete assessments and assignments. This UI was meticulously crafted following high-level accessibility rules, ensuring an inclusive learning experience for all students regardless of their abilities.  Furthermore, the platform embraced responsive design principles, guaranteeing an optimal user experience across various devices, from desktops to tablets and smartphones.",
};

export const LINEAS_Y_DISENOS: IExperienceData = {
  title: "Líneas y diseños",
  fromDate: new Date(2016, 4, 1),
  toDate: new Date(2020, 9, 31),
  description:
    "I spearheaded the company's digital presence, managing social media platforms and webpages to cultivate a strong online brand identity. I strategically developed and executed advertising campaigns utilizing Facebook Ads and Google Ads to drive targeted traffic and achieve marketing objectives. Additionally, I fostered customer engagement through post-sale email marketing campaigns, nurturing brand loyalty and promoting repeat business.",
};

export const BROUGHTON_PRIMARY_SCHOOL: IExperienceData = {
  title: "Broughton Primary School",
  fromDate: new Date(2011, 5, 20),
  toDate: new Date(2017, 7, 30),
  description:
    "I cultivated a rich digital learning environment by curating and providing engaging educational resources for students and teachers. These resources included a collection of recorded stories in Spanish and English, fostering language acquisition and cultural appreciation.",
};
