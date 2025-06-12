import React from "react";
// @ts-ignore
import TableDataCustom from "@/assets/Components/TableDataCustom/TableDataCustom";
// @ts-ignore
import {CommentsHeaderTable , comments} from "./../../../LocalData/LocalData";


export default function Ticket() {
  return (
    <div className="mr-3 dark:text-white text-zinc-800 font-Dana-Demi-bold">
      <TableDataCustom headers={CommentsHeaderTable} data={comments}/>
    </div>
  );
}
