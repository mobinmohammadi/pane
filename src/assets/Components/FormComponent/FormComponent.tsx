import React from "react";

export default function FormComponent() {
  return (
    <div className="bg-[#212d45] w-full rounded-sm font-Dana-Demi-bold p-5">
      <form action="#">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
          <div className="text-dark-menu flex flex-col gap-2">
            <label className="text-sm" htmlFor="name">
              نام و نام خانوادگی
            </label>
            <input
              className="text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm"
              type="text"
              placeholder="نام و نام خانوادگی ..."
            />
          </div>
          <div className="text-dark-menu flex flex-col gap-2">
            <label className="text-sm" htmlFor="name">
              پسوورد
            </label>
            <input
              className="text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm"
              type="text"
              placeholder="پسوورد..."
            />
          </div>
          <div className="text-dark-menu flex flex-col gap-2">
            <label className="text-sm" htmlFor="name">
              شماره تماش
            </label>
            <input
              className="text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm"
              type="text"
              placeholder="شماره تماس..."
            />
          </div>
          <div className="text-dark-menu flex flex-col gap-2">
            <label className="text-sm" htmlFor="name">
              ایمیل
            </label>
            <input
              className="text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm"
              type="text"
              placeholder="ایمیل ..."
            />
          </div>
        </div>
        <button className=""></button>
      </form>
    </div>
  );
}
