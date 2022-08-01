import Icon from "../models/icon";
import Project from "../models/project";
import {
  faInstagram,
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const info = {
  bio: [
    { id: 1, text: "🎲 nerd at heart" },
    { id: 2, text: "🌏 based in Korea" },
    { id: 3, text: "💻 looking for job opportunities!" },
    { id: 4, text: "📧 pat43607@gmail.com" },
  ],

  interests: [
    { id: 1, text: "🎮 videogames" },
    { id: 2, text: "🎬 cinema" },
    { id: 3, text: "🛫 travelling" },
    { id: 4, text: "🐒 animals" },
  ],

  about: {
    name: "Pablo",
    rol: "Web Developer",
    text1: "After several years of professional experience as",
    text2:
      ", I changed my position and decided to travel the world as a Software System Engineer. Now I am back in web and really happy to be learning all the amazing new tools that makes us, developers, life much easier.",
    text3:
      "Reliable, resourceful, result-driven. Looking for remote job opportunities.",
  },

  socials: [
    new Icon("https://linkedin.com/in/pabloabril/", faLinkedin, "linkedin"),
    new Icon("https://github.com/Jezzail", faGithub, "github"),
    new Icon("https://instagram.com/ragezzail/", faInstagram, "instagram"),
    new Icon("https://discordapp.com/users/Jezzail#5097", faDiscord, "discord"),
  ],

  skills: [
    new Icon(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "/skills/javascript.png",
      "JavaScript"
    ),
    new Icon(
      "https://www.typescriptlang.org/",
      "/skills/typescript.png",
      "TypeScript"
    ),
    new Icon("https://nextjs.org/", "/skills/next.png", "NextJs"),
    new Icon(
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "/skills/css.png",
      "CSS"
    ),
    new Icon(
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "/skills/html.png",
      "HTML"
    ),
    new Icon("https://www.mongodb.com/", "/skills/mongodb.png", "MongoDB"),
    new Icon("https://expressjs.com/", "/skills/expressjs.png", "ExpressJs"),
    new Icon("https://reactjs.org/", "/skills/reactjs.png", "React"),
    new Icon("https://nodejs.org/en/", "/skills/nodejs.png", "NodeJs"),
    new Icon("https://vercel.com/", "/skills/vercel.png", "Vercel"),
    new Icon(
      "https://firebase.google.com/",
      "/skills/firebase.png",
      "Firebase"
    ),
    new Icon("https://www.heroku.com/", "/skills/heroku.png", "Heroku"),
    new Icon("https://mui.com/", "/skills/materialui.png", "MaterialUI"),
    new Icon("https://tailwindcss.com/", "/skills/tailwind.png", "Tailwind"),
    new Icon("https://next-auth.js.org/", "/skills/nextauth.png", "NextAuthJs"),
  ],

  projects: [
    new Project(
      "https://github.com/Jezzail/portfolio",
      "https://patportfolio.dev/",
      "/projects/portfolio_demo.png",
      "Portfolio",
      "Portfolio portal ",
      "React • Nextjs • Typescript • NextUI • CSSModules"
    ),
    new Project(
      "https://github.com/Jezzail/twitter_mockup",
      "https://twitter-mockup.vercel.app/",
      "/projects/twitter_demo.png",
      "Twitter Demo",
      "Mockup of the famous social network",
      "React • Nextjs • Typescript • TailwindCSS • NextAuthjs • Vercel"
    ),
    new Project(
      "https://github.com/Jezzail/places_mern",
      "https://mern-test-c7330.web.app/",
      "/projects/places_demo.png",
      "Share Places Demo",
      "Designed under the MERN stack. Backend + Frontend",
      "MongoDB • Mongoose • Express • React • NodeJs • Firebase • Heroku • MaterialUI"
    ),
    new Project(
      "https://github.com/Jezzail/food_app",
      "https://food-app-f9c43.web.app/",
      "/projects/food_demo.png",
      "Food Store Demo",
      "Fill a cart of food and generate orders",
      "React • Firebase • CSSModules"
    ),
  ],

  footer: "2022 @ Pablo Abril",
};
