import {
  Thunderstorm as FallLogo,
  LocalFlorist as SpringLogo,
  WbSunny as SummerLogo,
  AcUnit as WinterIcon,
} from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { SeasonEnum } from "../../utils/seasons";

export const SeasonSelection = ({
  season,
  setSeason,
}: {
  season: SeasonEnum;
  setSeason: Dispatch<SetStateAction<SeasonEnum>>;
}) => {
  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newSeason: SeasonEnum
  ) => {
    setSeason(newSeason);
  };

  return (
    <ToggleButtonGroup
      value={season}
      exclusive
      onChange={handleAlignment}
      aria-label="current season"
      className="season-selection"
    >
      <ToggleButton value={SeasonEnum.spring} aria-label={SeasonEnum.spring}>
        <SpringLogo />
      </ToggleButton>
      <ToggleButton value={SeasonEnum.summer} aria-label={SeasonEnum.summer}>
        <SummerLogo />
      </ToggleButton>
      <ToggleButton value={SeasonEnum.fall} aria-label={SeasonEnum.fall}>
        <FallLogo />
      </ToggleButton>
      <ToggleButton value={SeasonEnum.winter} aria-label={SeasonEnum.winter}>
        <WinterIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
