import { Link, Image, Text } from "@nextui-org/react";

import Icon from "../models/icon";

import classes from "./SkillItem.module.css";

export interface Props {
  skill: Icon;
}

function SkillItem(props: Props): JSX.Element {
  const { skill } = props;
  return (
    <>
      <Link target="_blank" href={skill.link} className={classes.link}>
        <Image
          src={skill.icon as string}
          className={classes.image}
          alt={skill.label}
        />
      </Link>
      <Text className={classes.text}>{skill.label}</Text>
    </>
  );
}

export default SkillItem;
