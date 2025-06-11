import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

type InitailType = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export default function FormComponent() {
  const addNewUserHandler = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("عملیات با موفقیت انجام شد!");
    setTimeout(() => {
      location.reload()
      
    }, 2000);
  };

  const formik = useFormik<InitailType>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-[#212d45] w-full rounded-sm font-Dana-Demi-bold p-5">
      <form action="#" onSubmit={formik.handleSubmit}>
        <div className="flex gap-5 flex-col">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
            <div className="text-dark-menu flex flex-col gap-2">
              <label className="text-sm" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
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
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
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
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
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
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm"
                type="text"
                placeholder="ایمیل ..."
              />
            </div>
          </div>
          <div className="w-full flex justify-end text-white  text-sm ">
            <button
            type="submit"
              onClick={(e) => addNewUserHandler(e)}
              className="bg-zinc-800 rounded-md hover:bg-zinc-900 transition-all cursor-pointer w-22 pt-2 pb-2"
            >
              ثبت کاربر
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
