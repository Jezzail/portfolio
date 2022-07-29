import React from "react";
import { Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import Icon from "../models/icon";

import classes from "./SocialItem.module.css";

const SocialItem: React.FC<{ social: Icon }> = (props) => {
  return (
    <Link
      target="_blank"
      aria-label={props.social.label}
      rel="noopener noreferrer"
      href={props.social.link}
      className={classes.link}
    >
      <FontAwesomeIcon icon={props.social.icon as IconProp} />
      {/* <i className={props.social.icon} aria-hidden="true" /> */}
    </Link>
  );
};

export default SocialItem;
