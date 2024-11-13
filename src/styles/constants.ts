export type SiteSetupElement = Record<string, string>;
export const SiteSetup: SiteSetupElement = {
  Title: 'Gordon Stevens: Personal Site',
  Description: 'The personal site of Gordon Stevens',
  Favicon: '/assets/site/favicon-maple-leaf-0.svg',
  ObsidianVault: 'C:\\htdocs\\quartz\\content',
  GordonLambdaTitle: 'Notebook',
  GordonLambdaTheme: 'very-purple',
} satisfies Record<string, string>;

export type SitePublishElement = Record<string, boolean>
export const SitePublish: SitePublishElement = {
  ShowProjects: true,
  ShowArticles: false,
  ShowAbout: true,
  IsMaintenance: false
} satisfies Record<string, boolean>;

export type SiteLinkElement = Record<string, string>;
export const SiteLink: SiteLinkElement = {
  AstroStarlight: 'https://starlight.astro.build/',
  InternetDistillery: 'https://www.internetdistillery.com/',
  SuperUpmarket: 'https://www.superupmarket.com/',
  InvitationApp: 'https://invitation.app/@gordonstevens',
  ORCID: 'https://orcid.org/0000-0002-9976-9236',
  LinkTree: 'https://linktr.ee/gordonstevens',
  IETFInternetSociety: 'https://www.internetsociety.org/',
  IntlSocietyAutomation: 'https://www.isa.org/',
  DPACanada: 'https://dronepilotassociationofcanada.com/',
  Kaggle: 'https://www.kaggle.com/gordonstevens',
  Dribbble: 'https://dribbble.com/gordonstevens',
  X: 'https://x.com/canadacoder',
  GitHub: 'https://github.com/gordonstevens',
  DuckDuckGoAnonAI: 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
  Instagram: 'https://www.instagram.com/canadacoder',
  LinkedIn: 'https://www.linkedin.com/in/gordonstevens',
  Pinterest: 'https://www.pinterest.ca/canadacoder/',
  LayersTO: 'https://layers.to/gordonstevens',
  SoundCloud: 'https://soundcloud.com/canadacoder',
  AudioTool: 'https://www.audiotool.com/user/canadacoder',
  MeetupCOM: 'https://www.meetup.com/members/182498808/',
  Duolingo: 'https://www.duolingo.com/profile/9gordon',
  Credly: 'https://www.credly.com/users/gordonstevens',
  OpenLearnUniversity: 'https://www.open.edu/openlearn/profiles/zt842829',
  GordonLambda: '/notebook/'
} satisfies Record<string, string>;

export type AssocLinkElement = Record<string, string>;
export const AssocLink: AssocLinkElement = {
  DronePilotAssocCanada: 'https://dronepilotassociationofcanada.com/',
  HotPepperGrowingSociety: 'https://www.facebook.com/groups/2785555031/',
  InternetSociety: 'https://www.internetsociety.org/',
  InternationalSocietyAutomation: 'https://www.isa.org/',
  LabInformaticsInstitute: 'http://www.limsforum.com/',
  RoyalSocietyChemistry: 'http://www.rsc.org/',
  SDF: 'https://sdf.org/',
  IEEE: 'https://www.ieee.org',
  ChemInst: 'https://www.cheminst.ca/',
  FCArchers: 'https://www.forestcityarchers.ca/',
} satisfies Record<string, string>;

export const COURSEDESC_DIR_URL = '/t/';
export const COURSEDESC_SUBDIR_RGU = 'Robert%20Gordon%20University/';
export const COURSEDESC_SUBDIR_SENECA = 'Seneca%20College/';
export const COURSEDESC_SUBDIR_CENCOL = 'Centennial%20College/';
export const COURSEDESC_SUBDIR_GBC = 'George%20Brown%20College/';
export const COURSEDESC_SUBDIR_LOYALIST = 'Loyalist%20College/';
export const COURSEDESC_SUBDIR_CBU = 'Cape%20Breton%20University/';
export const COURSEDESC_SUBDIR_ENEB = 'ENEB/';
export const COURSEDESC_SUBDIR_LINKEDIN = 'LinkedIn/';
export const COURSEDESC_SUBDIR_UDEMY = 'Udemy/';
export const COURSEDESC_SUBDIR_EDUONIX = 'Eduonix/';
