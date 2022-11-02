import * as React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

export interface IEventListProps {
  items: any[];
}

export default function EventList({ items }: IEventListProps) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
}
