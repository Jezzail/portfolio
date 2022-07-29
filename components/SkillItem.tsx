import React, { Fragment } from "react";
import { Link, Image, Text } from "@nextui-org/react";

import Icon from "../models/icon";

import classes from "./SkillItem.module.css";

const SkillItem: React.FC<{ skill: Icon }> = (props) => {
  return (
    <Fragment>
      <Link target="_blank" href={props.skill.link} className={classes.link}>
        <Image
          src={props.skill.icon as string}
          className={classes.image}
          alt={props.skill.label}
        />
      </Link>
      <Text className={classes.text}>{props.skill.label}</Text>
    </Fragment>
  );
};

export default SkillItem;
