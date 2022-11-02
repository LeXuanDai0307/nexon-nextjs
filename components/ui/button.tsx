import Link from "next/link";
import * as React from "react";
import classes from "./button.module.css";

export interface IButtonProps {
  link: string;
  children: any;
}

export default function Button({ link, children }: IButtonProps) {
  return (
    <Link href={link}>
      <button className={classes.btn}>{children}</button>
    </Link>
  );
}
