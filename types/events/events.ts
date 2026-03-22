export type ClubEvent =
  | "unnati"
  | "gizmo"
  | "code-e-phobia"
  | "technovation"
  | "mindboggler";


export interface Event{
  // for all events

  id: string;
  title: string;
  club: ClubEvent;
  date: string;
  time: string;
  venue: string;
  coverImage: string;
  description: string[];

  // for upcomming events only not for past 
  registrationLink?: string;
  registrationDeadLine?: string;

  // for past events only not for upcomming
  outcome?: string;
  winners?: {
    name: string;
    position: string;
    winImage?: string;
    members:{
      name: string;
      rollNo: string;
      course: string;
    }[];
  }[];

  gallery?: string[];
}