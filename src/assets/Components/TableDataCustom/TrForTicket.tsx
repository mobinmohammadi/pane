import React from "react";
import { showAlert } from "../ShowSwal/ShowSwal";
import   { TrType }  from "./TableDataCustomType"

//  const tdClass = [
//     "bg-green-800 text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2",
//     "",
//     "",
//     "",
//     "w-5 h-5 cursor-pointer hover:text-sky-600 mr-2",
//     "px-4 py-2 cursor-pointer",
//   ];

export default function TrForTicket({id,name,email,rating,role , text, reply,date} : TrType) {
  const tdClass = [
    `${reply ? "bg-green-800" : "bg-sky-900"} text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2`,
    "",
    "",
    "whitespace-nowrap text-ellipsis max-w-4 overflow-hidden",
    "",
    "px-4 py-2 cursor-pointer ",
    "",
  ];
  return (
    <tr
      key={id}
      className="& > *:py-2   font-Dana-Demi-bold text-xs & > *:px-2"
    >
      {[
        id,
        name,
        email,
        text,
        rating,
        date,
        reply ? "پاسخ داده شده"   : "پاسخ داده نشده",
        null,
        null,
      ].map((item, index) => {
        if (index === 7) {
          return (
            <td key={index}>
              <svg
                onClick={() => showAlert({name , email ,text , reply})}
                className="w-5 h-5 cursor-pointer hover:text-sky-600 mr-2"
              >
                <use href="#eye"></use>
              </svg>
            </td>
          );
        }
        if (index === 8) {
          return (
            <td key={index} className={tdClass[index]}>
              <svg className="w-5 h-5 dark:text-red-600 hover:text-red-600 transition-all">
                <use href="#trash"></use>
              </svg>
            </td>
          );
        }
        return (
          <td  key={index} className={tdClass[index]}>
            {item}
          </td>
        );
      })}
    </tr>
  );
}
