import React from "react";

type Props = {
  title: string;
  svg: string;
  time: string;
  disc: string;
};
export default function BoxItemsLastOperation({
  title,
  svg,
  time,
  disc,
}: Props) {
  return (
    <div className="flex  pt-4 pb-4 pr-3 pl-3 rounded-sm gap-2 flex-col dark:bg-[#212d45] bg-white font-Dana-Demi-bold">
      <div className="flex gap-3 sm:gap-1 flex-col 3xs:flex-row items-center 3xs:items-start">
        <svg className="w-8 h-8 dark:text-white text-zinc-800">
          <use href={`#${svg}`}></use>
        </svg>
        <div className="flex flex-col items-center sm:items-start sm:gap-0 gap-3 text-xs ">
          <span className="dark:text-white text-xs text-zinc-800 max-w-28 text-center sm:text-right line-clamp-1 overflow-hidden">{title}</span>
          <span className="dark:text-dark-menu text-sky-700    text-x">
            {time} دقیقه پیش
          </span>
        </div>
      </div>
      <div className="dark:text-primary-dark text-x text-zinc-900 text-center sm:text-right ">{disc}</div>
    </div>
  );
}
