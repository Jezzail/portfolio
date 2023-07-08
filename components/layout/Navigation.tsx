import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Grid, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

import classes from "./Navigation.module.css";

function Navigation(): JSX.Element {
  const router = useRouter();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Grid.Container className={classes.gridContainer}>
      <Grid>
        <NextLink href="/">
          <Button
            size="lg"
            color="success"
            auto
            light
            flat={router.pathname === "/" ? true : false}
            className={classes.button}
          >
            home
          </Button>
        </NextLink>
      </Grid>
      <Grid>
        <NextLink href="/about">
          <Button
            size="lg"
            color="secondary"
            auto
            light
            flat={router.pathname === "/about" ? true : false}
            className={classes.button}
          >
            about me
          </Button>
        </NextLink>
      </Grid>
      <Grid
        className={classes.icon}
        css={{
          "@xs": { fontSize: "3rem" },
          "@xsMax": {
            fontSize: "2rem",
          },
        }}
      >
        <FontAwesomeIcon icon={faReact} />
      </Grid>
      <Grid>
        <NextLink href="/portfolio">
          <Button
            size="lg"
            color="primary"
            auto
            light
            flat={router.pathname === "/portfolio" ? true : false}
            className={classes.button}
          >
            portfolio
          </Button>
        </NextLink>
      </Grid>
      <Grid>
        <Switch
          size="lg"
          className={classes.button}
          color="warning"
          bordered
          checked={isDark}
          iconOn={<MoonIcon />}
          iconOff={<SunIcon />}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </Grid>
    </Grid.Container>
  );
}

export default Navigation;
