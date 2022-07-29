import React from "react";
import { Link, Image, Text, Grid, Card, Button } from "@nextui-org/react";

import Project from "../models/project";

import classes from "./ProjectItem.module.css";

const ProjectItem: React.FC<{ project: Project }> = (props) => {
  return (
    <Grid className={classes.grid}>
      <Image src={props.project.image} />
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
                <i className="fa-solid fa-laptop-code" aria-hidden="true" />
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
            <Button auto icon={<i className="fa fa-code" aria-hidden="true" />}>
              Github
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default ProjectItem;
