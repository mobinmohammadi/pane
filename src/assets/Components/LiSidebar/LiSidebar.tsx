import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  changeTitlePageSidebar: (title: string) => void;
  titlePageSildebar : string;
  link : string
};

export default function LiSidebar({ title, changeTitlePageSidebar ,link , titlePageSildebar }: Props) {
  return (
    <Link
      to={link}
      onClick={() => changeTitlePageSidebar(title)}

      className={`${title == titlePageSildebar ? "bg-zinc-800 text-white dark:bg-slate-100 dark:text-zinc-800" : 'dark:text-dark-menu'} transition-all  pt-2 pb-2 3xs:pt-1 3xs:pb-1 pr-2 rounded-sm  text-sm sm:text-base  font-Dana-Demi-bold cursor-pointer w-full`}
    >
      {title}
    </Link>
  );
}
