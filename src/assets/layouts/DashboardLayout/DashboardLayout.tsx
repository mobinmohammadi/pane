import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import TopbarSidebar from "@/assets/Components/Sidebar/TopbarSidebar/TopbarSidebar";

function DashboardLayout() {
  const [isShowMenuPanel, setIsShowMenuPanel] = useState<boolean>(false);

  const wrapperMenuPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShowMenuPanel) {
      if (wrapperMenuPanel.current) {
        wrapperMenuPanel.current.classList.add("right-0", "opacity-100");
        wrapperMenuPanel.current.classList.remove("right-full", "opacity-0");
        console.log(isShowMenuPanel);
        
      }
    } else if (wrapperMenuPanel.current) {
      if(!isShowMenuPanel){

        wrapperMenuPanel.current.classList.remove("right-0");
        wrapperMenuPanel.current.classList.add("-right-full", "opacity-0");
      }

    }
  }, [isShowMenuPanel]);

  return (
    <div className="flex min-h-[100vh]">
      <div
        ref={wrapperMenuPanel}
        className={` tranition-custom z-20  flex min-h-[100vh] fixed -right-full sm:right-0 opacity-100`}
      >
        <Sidebar setIsShowMenuPanel={setIsShowMenuPanel} />
      </div>
      <main className="flex flex-col  xl:mr-[297px] pb-10 mx-auto gap-5  pr-5 pl-5 w-full">
        <TopbarSidebar setIsShowMenuPanel={setIsShowMenuPanel} />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
