// src/pages/AdminDashboard.tsx
import InventoryBox from "./InventoryBox";

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">داشبورد ادمین</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <InventoryBox total={152} lowStock={4} />
        {/* می‌تونی باکس‌های دیگه مثل سفارش‌ها یا کاربران هم اضافه کنی */}
      </div>
    </div>
  );
}
