import React, { useEffect, useState } from "react";
import { users } from "../../../LocalData/LocalData";

export default function TableDataCustom() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowPageShow, setRowPageShow] = useState<number>(8);

  const totalPage = Math.ceil(users.length / rowPageShow);

  const handlePageForShow = (sum: number) => {
    setCurrentPage(sum);
  };

  const startIndex = (currentPage - 1) * rowPageShow;
  const currentItems = users.slice(startIndex, startIndex + rowPageShow);

  const handlePageForPrev = () => {
    setCurrentPage((prev) => prev - 1)
  }

  const handlePageForNext = () => {
    setCurrentPage((prev) => prev + 1)

  }

  return (
    <div className="overflow-x-auto pb-10 ">
      <table className="min-w-full   dark:bg-[#212d45] bg-white  rounded-sm  text-right">
        <thead className="  dark:bg-[#2b3547d1] dark:text-white border-b-2 dark:border-b-2 border-sky-800 border-solid">
          <tr className="& > *:text-x & > *:text-sm & > *:px-4 & > *:py-2 ">
            <th className="">شماره</th>
            <th className="">نام</th>
            <th className="">ایمیل</th>
            <th className="">نقش</th>
            <th className="">ویرایش</th>
            <th className="">بن</th>
          </tr>
        </thead>
        <tbody className=" dark:text-dark-menu">
          {currentItems.map((user) => (
            <tr className="& > *:px-4 & > *:py-2 pt-1 & > *:text-x font-Dana-Demi-bold">
              <td className="bg-green-800 text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2">
                {user.id}
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role == 1 ? "ادمین" : "کاربر"}</td>
              <td className="">
                <svg className="w-5 h-5 cursor-pointer hover:text-sky-600 mr-2">
                  <use href="#paint-brush"></use>
                </svg>
              </td>
              <td className="px-4 py-2 cursor-pointer ">
                <svg className="w-5 h-5 dark:text-red-600 hover:text-red-600 transition-all">
                  <use href="#trash "></use>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-5 gap-2">
        <button disabled={currentPage === 1 } onClick={() => handlePageForPrev()} className={` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${currentPage === 1 ? "bg-slate-300 text-gray-800" : "text-white hover:bg-sky-900  bg-sky-800"} transition-all`}>
          <svg className="w-5 h-5">
            <use href="#chevron-right"></use>
          </svg>
        </button>
        {[...Array(totalPage)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageForShow(index + 1)}
            className={`${
              currentPage == index + 1 ? "bg-green-800 dark:bg-zinc-950" : " bg-green-600 "
            } cursor-pointer transition-all dark:bg-[#212d45] w-10 text-white rounded-sm h-10`}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPage} onClick={() => handlePageForNext()} className={` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${currentPage === totalPage ? "bg-slate-300 text-gray-800" : "text-white hover:bg-sky-900  bg-sky-800"} transition-all`}>
          <svg className="w-5 h-5">
            <use href="#chevron-left"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
