import type { NextPage } from "next";
import { Grid, Text, Container, Row } from "@nextui-org/react";

import classes from "./index.module.css";

const Home: NextPage = () => {
  return (
    <Grid.Container gap={2} className={classes.gridContainer} justify="center">
      <Grid>
        <Text h1>
          🚧{" "}
          <Text span className={classes.name}>
            Portfolio
          </Text>{" "}
          is being rebuilt
        </Text>

        <Text h2 css={{ textAlign: "center" }}>
          Temporary downtime while I work on a new version
        </Text>

        <Container gap={1} justify={"center"}>
          <Row justify="center">
            <Text className={classes.bio}>
              I'm currently redesigning and improving this site.
            </Text>
          </Row>
          <Row justify="center">
            <Text className={classes.bio}>
              It will be back soon with updated projects and a better structure.
            </Text>
          </Row>
        </Container>

        <Grid.Container gap={2} justify="center" css={{ marginTop: "20px" }}>
          <Grid>
            <Text small css={{ opacity: 0.6 }}>
              Thanks for your patience 🙏
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default Home;
