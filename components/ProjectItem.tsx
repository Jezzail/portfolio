import { Link, Image, Text, Grid, Card, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop } from "@fortawesome/free-solid-svg-icons";

import Project from "../models/project";

import classes from "./ProjectItem.module.css";

export interface Props {
  project: Project;
}

function ProjectItem(props: Props): JSX.Element {
  const { project } = props;
  return (
    <Grid className={classes.grid}>
      <Image src={project.image} alt={project.title} />
      <Card className={classes.card}>
        <Card.Header className={classes.cardHeader}>
          <Text h3>{project.title}</Text>
        </Card.Header>
        <Card.Body className={classes.Body}>
          <Text className={classes.text}>{project.desc}</Text>
          <Text className={classes.text}>{project.techs}</Text>
        </Card.Body>
        <Card.Footer className={classes.cardFooter}>
          <Link
            target="_blank"
            href={project.linkDemo}
            className={classes.link}
          >
            <Button auto icon={<FontAwesomeIcon icon={faLaptop} />}>
              Live Demo
            </Button>
          </Link>
          {project.linkCode && (
            <Link
              target="_blank"
              href={project.linkCode}
              className={classes.link}
            >
              <Button auto icon={<FontAwesomeIcon icon={faCode} />}>
                Github
              </Button>
            </Link>
          )}
        </Card.Footer>
      </Card>
    </Grid>
  );
}

export default ProjectItem;
