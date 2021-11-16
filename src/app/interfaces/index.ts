export interface iProject {
  id: any;
  name: string;
  desc: string;
  img: string;
  github?: string | null;
  web?: string | null;
  technologies?: string[] | null;
}

export interface iFooterInfo {
  title: string;
  path: string;
}
