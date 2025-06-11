import FormComponent from "@/assets/Components/FormComponent/FormComponent"
import TableDataCustom from "@/assets/Components/TableDataCustom/TableDataCustom"
import { ToastContainer } from "react-toastify"
export default function Users() {
  return (
    <div className="flex fl-col gap-5 flex-col">
      <FormComponent/>
      <TableDataCustom/>
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
  )
}
