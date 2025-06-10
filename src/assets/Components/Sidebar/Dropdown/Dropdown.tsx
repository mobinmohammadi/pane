import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

type Props = {
  isShowModalAdmin: boolean;
  showModalAdmin : () => void
};

export default function Dropdown({ isShowModalAdmin , showModalAdmin  }: Props) {
  return (
    <div
      className={`${
        isShowModalAdmin ? "opacity-100 mt-2 " : "opacity-0 mt-0 "
      } z-50 absolute transition-all  bg-white dark:text-zinc-700 w-full  right-0 rounded-sm   top-full `}
    >
      <ul className=" flex-col hidden & > *:flex & > *:gap-1 & > *:items-center & > *:rounded-sm gap-3  & > *:cursor-pointer transition-all & > *:pt-3 & > *:pb-3 & > *:pr-2 ">
        <li className="text-xs hover:bg-slate-200">
          <svg className="w-5 h-5">
            <use href="#bell"></use>
          </svg>
          <span>اعلان ها</span>
        </li>
        <li className="text-xs hover:bg-slate-200">
          <svg className="w-5 h-5">
            <use href="#information-circle"></use>
          </svg>
          <span>ویرایش مشخصات</span>
        </li>
        <li className="text-xs hover:bg-red-800 rounded-t-none hover:text-white">
          <svg className="w-5 h-5">
            <use href="#arrow-left-end-on-rectangle"></use>
          </svg>
          <span>خروج</span>
        </li>
      </ul>


    </div>
  );
}
