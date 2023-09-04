import { ReactElement } from "react";

import { ReactComponent as Home } from "../../svg/Home.svg";
import { ReactComponent as Heartbeat } from "../../svg/Heartbeat.svg";
import { ReactComponent as User } from "../../svg/User.svg";
import { ReactComponent as Search } from "../../svg/Search.svg";
import { ReactComponent as Favorite } from "../../svg/Heartbeat.white.svg";

import "./iconFactory.styles.css"

const icons = {
  home: Home,
  heartbeat: Heartbeat,
  user: User,
  search: Search,
  favorite: Favorite
};

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  icon: IconType;
  isActive?: boolean;
}

function Icon({ icon, isActive }: IconProps): ReactElement {
  const SVGIcon = icons[icon];
  return <SVGIcon className={isActive? "active" : "inactive"} />;
}

export default Icon;