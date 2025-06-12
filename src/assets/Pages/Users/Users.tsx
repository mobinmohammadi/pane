import FormUserCreate from "@/assets/Components/FormUserCreate/FormUserCreate";
import TableDataCustom from "@/assets/Components/TableDataCustom/TableDataCustom";
import { ToastContainer } from "react-toastify";
// @ts-ignore
import {users , tableHeadersUser} from "../../../LocalData/LocalData"

export default function Users() {
  return (
    <div className="flex fl-col gap-5 flex-col">
      <FormUserCreate />
      <TableDataCustom data={users} headers={tableHeadersUser} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={true} // برای زبان فارسی
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="custom-toast"
        theme="colored"
      />
    </div>
  );
}
