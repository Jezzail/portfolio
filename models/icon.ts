import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

class Icon {
  link: string;
  icon: IconDefinition | string;
  label: string;

  constructor(link: string, icon: IconDefinition | string, label: string) {
    this.link = link;
    this.icon = icon;
    this.label = label;
  }
}

export default Icon;
