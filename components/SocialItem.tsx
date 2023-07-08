import { Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Icon from "../models/icon";

import classes from "./SocialItem.module.css";

export interface Props {
  social: Icon;
}

function SocialItem(props: Props): JSX.Element {
  const { social } = props;
  return (
    <Link
      target="_blank"
      aria-label={social.label}
      rel="noopener noreferrer"
      href={social.link}
      className={classes.link}
    >
      <FontAwesomeIcon icon={social.icon as IconProp} />
      {/* <i className={props.social.icon} aria-hidden="true" /> */}
    </Link>
  );
}

export default SocialItem;
