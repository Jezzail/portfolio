import { ReactNode } from "react";
import Head from "next/head";
import { Card, Text } from "@nextui-org/react";

import Navigation from "./Navigation";
import { info } from "../../info/info";

import classes from "./Layout.module.css";

export interface Props {
  title: string;
  children?: ReactNode;
}

function Layout(props: Props): JSX.Element {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Card variant="flat" className={classes.card}>
        <Card.Header className={classes.cardHeader}>
          <Navigation />
        </Card.Header>
        <Card.Body className={classes.cardBody}>{children}</Card.Body>
        <Card.Footer className={classes.cardFooter}>
          <Text>{info.footer}</Text>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Layout;
