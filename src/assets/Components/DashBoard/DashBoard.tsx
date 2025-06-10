import React, { useState } from "react";
import { dataDashboardMain } from "@/LocalData/LocalData";
import ItemsDashBoard from "./ItemsDashBoard/ItemsDashBoard";
import WrapperLastOperation from "./WrapperLastOperation/WrapperLastOperation";
import TitleForBoxesSections from "../TitleForBoxesSections/TitleForBoxesSections";

export default function DashBoard() {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col">
        <TitleForBoxesSections title="آمار کلی امروز سایت" />
        <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 gap-3">
          {dataDashboardMain.map((item) => (
            <ItemsDashBoard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <WrapperLastOperation />
    </div>
  );
}
