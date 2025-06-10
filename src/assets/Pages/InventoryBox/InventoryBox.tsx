// src/components/InventoryBox.tsx
import { Boxes, AlertTriangle } from 'lucide-react';

interface InventoryBoxProps {
  total: number;
  lowStock: number;
}

export default function InventoryBox({ total, lowStock }: InventoryBoxProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg flex items-center justify-between transition-all">
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">موجودی محصولات</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">تعداد کل: <span className="font-semibold">{total}</span></p>
        <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">کم‌بود: <span className="font-semibold">{lowStock}</span></p>
      </div>
      <div className="relative">
        <Boxes className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        {lowStock > 0 && (
          <div className="absolute -top-2 -right-2 bg-yellow-500 text-white p-1 rounded-full">
            <AlertTriangle className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
}
