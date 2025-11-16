export interface SiteList {
  domain: string;
  tld: string;
  tags?: Array<string>;
}

export type DNS = SiteList[];
