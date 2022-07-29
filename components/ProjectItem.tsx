import React from "react";
import { Link, Image, Text, Grid, Card, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";

import Project from "../models/project";

import classes from "./ProjectItem.module.css";

const ProjectItem: React.FC<{ project: Project }> = (props) => {
  return (
    <Grid className={classes.grid}>
      <Image src={props.project.image} alt={props.project.title}/>
      <Card className={classes.card}>
        <Card.Header className={classes.cardHeader}>
          <Text h3>{props.project.title}</Text>
        </Card.Header>
        <Card.Body className={classes.Body}>
          <Text className={classes.text}>{props.project.desc}</Text>
          <Text className={classes.text}>{props.project.techs}</Text>
        </Card.Body>
        <Card.Footer className={classes.cardFooter}>
          <Link
            target="_blank"
            href={props.project.linkDemo}
            className={classes.link}
          >
            <Button
              auto
              icon={
                <FontAwesomeIcon icon={faLaptop} />
              }
            >
              Live Demo
            </Button>
          </Link>
          <Link
            target="_blank"
            href={props.project.linkCode}
            className={classes.link}
          >
            <Button auto icon={<FontAwesomeIcon icon={faCode} />}>
              Github
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default ProjectItem;
