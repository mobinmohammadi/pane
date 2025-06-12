import React, { useEffect, useState } from "react";
import { users } from "../../../LocalData/LocalData";
import { log } from "node:console";
import { ReplayType } from "./TableDataCustomType";
//@ts-ignore
import { tableHeaders } from "../../../LocalData/LocalData";
import Th from "./Th";
import TrForTicket from "./TrForTicket";
import TrForUser from "./TrForUsers";
import { useLocation, useParams } from "react-router-dom";

type CommentType = {
  id: number;
  name: string;
  email: string;
  text?: string;
  rating?: number;
  date?: string;
  reply?: ReplayType;
};

type Props = {
  headers: string[];
  data: CommentType[];
};

export default function TableDataCustom({ data, headers }: Props) {
  const location = useLocation();
  const pathAfterPanel = location.pathname.split("/")[1];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPageShow, setRowPageShow] = useState<number>(13);

  const totalPage = Math.ceil(data.length / rowPageShow);

  const handlePageForShow = (sum: number) => {
    setCurrentPage(sum);
  };
  console.log();

  const startIndex = (currentPage - 1) * rowPageShow;
  const currentItems = data.slice(startIndex, startIndex + rowPageShow);

  const handlePageForPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handlePageForNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="overflow-x-auto pb-10 ">
      <table className="min-w-full   dark:bg-[#212d45] bg-white  rounded-sm  text-right">
        <thead className="  dark:bg-[#2b3547d1] dark:text-white border-b-2 dark:border-b-2 border-sky-800 border-solid">
          <tr className="& > *:text-x & > *:text-sm & > *:px-4 & > *:py-2 ">
            {pathAfterPanel == "users" ? headers.map((title: string, index: number) => (
                  <Th key={index + 1}>{title}</Th>
                ))
              : headers.map((title: string, index: number) => (
                  <Th key={index + 1}>{title}</Th>
                ))}
          </tr>
        </thead>
        <tbody className=" dark:text-dark-menu ">
          {pathAfterPanel == "users"
            ? currentItems.map((user) => <TrForUser {...user} />)
            : currentItems.map((user) => <TrForTicket {...user} />)}
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-5 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageForPrev()}
          className={` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${
            currentPage === 1
              ? "bg-slate-300 text-gray-800"
              : "text-white hover:bg-sky-900  bg-sky-800"
          } transition-all`}
        >
          <svg className="w-5 h-5">
            <use href="#chevron-right"></use>
          </svg>
        </button>
        {[...Array(totalPage)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageForShow(index + 1)}
            className={`${
              currentPage == index + 1
                ? "bg-green-800 dark:bg-zinc-950"
                : " bg-green-600 "
            } cursor-pointer transition-all dark:bg-[#212d45] w-10 text-white rounded-sm h-10`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPage}
          onClick={() => handlePageForNext()}
          className={` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${
            currentPage === totalPage
              ? "bg-slate-300 text-gray-800"
              : "text-white hover:bg-sky-900  bg-sky-800"
          } transition-all`}
        >
          <svg className="w-5 h-5">
            <use href="#chevron-left"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
