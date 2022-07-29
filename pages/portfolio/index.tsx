import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";

import ProjectItem from "../../components/ProjectItem";
import { info } from "../../info/info";

const Home: NextPage = () => {
  return (
    <Grid.Container justify="center" gap={2}>
      {info.projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </Grid.Container>
  );
};

export default Home;
