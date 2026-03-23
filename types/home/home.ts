export interface AboutSociety{
  title: string;
  tagline: string;
  description: string[];
}

export interface AboutClub extends AboutSociety{
  purpose: string;
  purposeDescription: string[];
}