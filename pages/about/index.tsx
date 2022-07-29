import type { NextPage } from "next";
import { Card, Container, Row, Spacer, Text, Grid } from "@nextui-org/react";

import SkillItem from "../../components/SkillItem";
import { info } from "../../info/info";

import classes from "./index.module.css";

const Home: NextPage = () => {
  return (
    <Container>
      <Row justify="center">
        <Card className={classes.card}>
          <Card.Header>
            <h4>About</h4>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text b className={classes.text}>
              {info.about.text1}
              <Text span className={classes.textColor}>
                {` ${info.about.rol}`}
              </Text>
              {info.about.text2}
            </Text>
            <Text b className={classes.text}>
              {info.about.text3}
            </Text>
          </Card.Body>
        </Card>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Card className={classes.card}>
          <Card.Header>
            <h4>Skills</h4>
          </Card.Header>
          <Card.Divider />
          <Card.Body className={classes.cardBody}>
            <Grid.Container justify="space-around" gap={6}>
              {info.skills.map((skill) => (
                <Grid key={skill.label}>
                  <SkillItem skill={skill} />
                </Grid>
              ))}
            </Grid.Container>
          </Card.Body>
        </Card>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Card className={classes.card}>
          <Card.Header>
            <h4>Interests</h4>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Container gap={1} justify={"space-around"}>
              {info.interests.map((interest) => (
                <Row key={interest.id}>
                  <Text b className={classes.text}>
                    {interest.text}
                  </Text>
                </Row>
              ))}
            </Container>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Home;
