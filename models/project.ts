class Project {
  linkCode: string;
  linkDemo: string;
  image: string;
  title: string;
  desc: string;
  techs: string;
  id: string;

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
    this.id = Math.random().toString(36).slice(2);
  }
}

export default Project;
