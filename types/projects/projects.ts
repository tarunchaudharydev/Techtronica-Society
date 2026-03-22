export type ProjectStatus=
"active" | "completed" | "on-hold";


export interface ProjectCredit {
  name: string;
  role: string;
  linkedinUrl?: string;
}
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailDescription: string[];
  working: string[];
  domain: string;
  status: ProjectStatus;
  year: number;
  coverImage: string;
  images: string[];
  credits: ProjectCredit[];
  repo?: string;
  liveDemo?: string;
}