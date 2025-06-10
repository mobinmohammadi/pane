import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type Props = {
  name: string;
  email: string;
  role: number;
};

const MySwal = withReactContent(Swal);

const showAlert = ({ name, email, role }: Props) => {

  MySwal.fire({
    title: <p>اطلاعات کابر</p>,
    html: (
      <div className="font-Dana-Demi-bold ">
        <p className="text-red-700">نام : {name}</p>
        <p>ایمیل : {email}</p>
        <p>نقش : {role == 1 ? "ادمین " : "کاربر"}</p>
      </div>
    ),
   
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
};

export { showAlert };
