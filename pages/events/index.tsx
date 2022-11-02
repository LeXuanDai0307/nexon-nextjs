import * as React from "react";
import EventList from "../../components/events/event-list";
import { getFeaturedEvents } from "./../../dummy-date";

export interface IEventsPageProps {}

export default function EventsPage(props: IEventsPageProps) {
  const events = getFeaturedEvents();

  return (
    <div>
      <h1>Events Page</h1>
      <EventList items={events} />
    </div>
  );
}
