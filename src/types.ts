export type Project = {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  technology: string;
  outcome: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: string;
  imageUri: string | null;
};

export type TabParamList = {
  Home: undefined;
  Skills: undefined;
  Projects: undefined;
  EditProfile: undefined;
  About: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  ProjectDetail: { project: Project };
};
