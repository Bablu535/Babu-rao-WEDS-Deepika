export interface RsvpGuest {
  id: string;
  name: string;
  attendance: "yes" | "no" | "maybe";
  guestsCount: number;
  message?: string;
  submittedAt: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WeddingSlide {
  id: number;
  title: string;
  subtitle: string;
}
