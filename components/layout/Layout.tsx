import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import { Card, Text } from "@nextui-org/react";

import Navigation from "./Navigation";
import { info } from "../../info/info";

import classes from "./Layout.module.css";

const Layout: React.FC<{ children?: ReactNode; title: string }> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Card variant="flat" className={classes.card}>
        <Card.Header className={classes.cardHeader}>
          <Navigation />
        </Card.Header>
        <Card.Body className={classes.cardBody}>{props.children}</Card.Body>
        <Card.Footer className={classes.cardFooter}>
          <Text>{info.footer}</Text>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default Layout;
