import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

type Props = {
  setIsShowMenuPanel: (value: boolean) => void;
};

export default function TopbarSidebar({ setIsShowMenuPanel }: Props) {
  const [isShowModalAdmin, setIsShowModalAdmin] = useState<boolean>(false);

  const showModalAdmin = () => {
    setIsShowModalAdmin((prev) => !prev);
  };
  useEffect(() => {
    console.log(isShowModalAdmin);
  }, [isShowModalAdmin]);
  return (
    <div className="pt-5  pr-3 w-full ">
      <div
        onClick={() => setIsShowMenuPanel(true)}
        className=" bg-yellow-500 flex justify-center items-center rounded-md cursor-pointer w-7 h-7"
      >
        <svg className="w-5 h-5 ">
          <use href="#bars-3"></use>
        </svg>
      </div>
      <div className="text-zinc-800 border-solid border-b-1 border-slate-300 pb-4 dark:text-white flex justify-between items-center w-full font-Dana-Demi-bold">
        <div className="flex flex-col gap-1">
          <span className="text-xs sm:text-sm">داشبورد فروشگاه</span>
          <div className="text-xs flex gap-1 tracking-wide">
            <span className="text-x sm:text-sm">مبین محمدی عزیز</span>
            <span className="dark:text-primary-dark text-x sm:text-sm">
              خوش آمدید{" "}
            </span>
            <span className="text-red-700 text-xs">🌷</span>
          </div>
        </div>

        <div className="flex items-center gap-1 relative z-10 ">
          <div className="border-2 relative border-yellow-400 border-solid rounded-full">
            <img
              className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer object-cover rounded-full "
              src="./Admin/Admin.jpg"
              alt=""
            />
            <span className="absolute bg-sky-500 top-0 right-1 h-2 w-2 rounded-full border-solid"></span>
          </div>
          <div
            className="flex flex-col gap-1"
            onClick={() => setIsShowModalAdmin(true)}
          >
            <span className="text-x sm:text-xs">مبین محمدی</span>
            <div className="flex gap-1">
              <span className="text-x ">توسعه دهنده فرانت</span>
              <svg className="w-4 h-4 sm:w-5  sm:h-5 cursor-pointer">
                <use href="#chevron-down"></use>
              </svg>
            </div>
          </div>
          <Dropdown
            isShowModalAdmin={isShowModalAdmin}
            showModalAdmin={showModalAdmin}
          />
        </div>
      </div>
    </div>
  );
}
