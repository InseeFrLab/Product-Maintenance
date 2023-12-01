import { SeasonEnum } from "../../utils/seasons";
import "./Background.css";
import fall from "/fall.jpg";
import spring from "/spring.jpg";
import summer from "/summer.jpg";
import winter from "/winter.jpg";

const getBackgroundImg = (season: SeasonEnum) => {
  switch (season) {
    case SeasonEnum.spring:
      return spring;
    case SeasonEnum.summer:
      return summer;
    case SeasonEnum.fall:
      return fall;
    case SeasonEnum.winter:
      return winter;
    default:
      return fall;
  }
};

export const Background = ({ season }: { season: SeasonEnum }) => {
  const backgroundImg = getBackgroundImg(season);
  return (
    <img src={backgroundImg} className="maintenace-img" alt="Maintenance" />
  );
};
