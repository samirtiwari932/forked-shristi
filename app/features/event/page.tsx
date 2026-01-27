import { Metadata } from "next";
import EventsComponent from "./layout";


export const metadata: Metadata = {
  title: "Event Planning for Families & Communities | Shristi Universe",
  description: "Create, organize, plan and manage events for families, groups, and communities using structured access with Shristi Universe’s event planning system.",
};

export default function EventPage() {
  return <EventsComponent />;
}