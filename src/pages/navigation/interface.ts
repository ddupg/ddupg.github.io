export interface Website {
  name: string;
  url: string;
  intro?: string;
  icon?: string;
}

export interface Classify {
  name: string;
  intro?: string;
  icon?: any;
  websites?: Website[];
}
