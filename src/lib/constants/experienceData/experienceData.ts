import { getFormattedDate } from "lib/utils";
import {
  GLOBANT,
  LINEAS_Y_DISENOS,
  BROUGHTON_PRIMARY_SCHOOL,
  IExperienceData,
} from "./experienceData.constants";

const keys = ["globant", "lineasydisenos", "broughtonPrimarySchool"] as const;

type TValidExperienceKey = (typeof keys)[number];

export interface INewExperienceData
  extends Omit<IExperienceData, "fromDate" | "toDate"> {
  fromDate: string;
  toDate: string;
}

type TExperience = {
  [key in TValidExperienceKey]: INewExperienceData;
};

export const experienceData: TExperience = {
  globant: {
    title: GLOBANT.title,
    fromDate: getFormattedDate(GLOBANT.fromDate),
    toDate: GLOBANT.toDate as string,
    description: GLOBANT.description,
  },
  lineasydisenos: {
    title: LINEAS_Y_DISENOS.title,
    fromDate: getFormattedDate(LINEAS_Y_DISENOS.fromDate),
    toDate: getFormattedDate(LINEAS_Y_DISENOS.toDate as Date),
    description: LINEAS_Y_DISENOS.description,
  },
  broughtonPrimarySchool: {
    title: BROUGHTON_PRIMARY_SCHOOL.title,
    fromDate: getFormattedDate(BROUGHTON_PRIMARY_SCHOOL.fromDate),
    toDate: getFormattedDate(BROUGHTON_PRIMARY_SCHOOL.toDate as Date),
    description: LINEAS_Y_DISENOS.description,
  },
};
