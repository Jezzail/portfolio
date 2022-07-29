class Project {
  linkCode: string;
  linkDemo: string;
  image: string;
  title: string;
  desc: string;
  techs: string;

  constructor(
    linkCode: string,
    linkDemo: string,
    image: string,
    title: string,
    desc: string,
    techs: string
  ) {
    this.linkCode = linkCode;
    this.linkDemo = linkDemo;
    this.image = image;
    this.title = title;
    this.desc = desc;
    this.techs = techs;
  }
}

export default Project;
