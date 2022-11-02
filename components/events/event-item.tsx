/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

export interface IEventItemProps {
  item: any;
}

export default function EventItem({ item }: IEventItemProps) {
  const { title, image, date, location, id } = item;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>DATE: {humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>ADDRESS: {formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
