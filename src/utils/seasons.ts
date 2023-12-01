import { isAfter, isBefore, isEqual } from "date-fns";

const currentYear = new Date().getFullYear();

type season = {
  start: Date;
  end: Date;
};

const springRang = {
  start: new Date(currentYear, 2, 20),
  end: new Date(currentYear, 5, 20),
};
const summerRanch = {
  start: new Date(currentYear, 5, 21),
  end: new Date(currentYear, 8, 22),
};
const fallRanch = {
  start: new Date(currentYear, 8, 23),
  end: new Date(currentYear, 11, 20),
};

export enum SeasonEnum {
  winter = "winter",
  spring = "spring",
  summer = "summer",
  fall = "fall",
}

const isCurrentDateInSeason = (season: season): boolean => {
  const currentDate = new Date();
  if (isEqual(currentDate, season.start) || isEqual(currentDate, season.end))
    return true;
  if (isAfter(currentDate, season.start) && isBefore(currentDate, season.end))
    return true;
  return false;
};

export const getCurrentSeason = () => {
  if (isCurrentDateInSeason(springRang)) return SeasonEnum.spring;
  if (isCurrentDateInSeason(summerRanch)) return SeasonEnum.summer;
  if (isCurrentDateInSeason(fallRanch)) return SeasonEnum.fall;
  return SeasonEnum.winter;
};
