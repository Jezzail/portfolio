import type { NextPage } from "next";
import { Grid, Text, Container, Row, Image } from "@nextui-org/react";

import SocialItem from "../components/SocialItem";
import { info } from "../info/info";

import classes from "./index.module.css";

const Home: NextPage = () => {
  return (
    <Grid.Container gap={2} className={classes.gridContainer}>
      <Grid className={classes.gridImage}>
        <Image src="/me.png" className={classes.image} />
      </Grid>
      <Grid>
        <Text h1>
          {"Hi! I'm "}
          <Text span className={classes.name}>
            {info.about.name}
          </Text>
          👋
        </Text>
        <Text h2>{info.about.rol}</Text>
        <Container gap={1} justify={"space-around"}>
          {info.bio.map((text) => (
            <Row key={text.id}>
              <Text b className={classes.bio}>
                {text.text}
              </Text>
            </Row>
          ))}
        </Container>
        <Grid.Container gap={2} justify="center">
          {info.socials.map((social) => (
            <Grid key={social.label}>
              <SocialItem social={social} />
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default Home;
