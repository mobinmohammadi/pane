import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import TitleForBoxesSections from "../TitleForBoxesSections/TitleForBoxesSections";

// داده با نام ماه‌های فارسی
const data = [
  { name: "فروردین", کاربران: 4000, بازدید: 2400, فروش: 2400 },
  { name: "اردیبهشت", کاربران: 3000, بازدید: 1398, فروش: 2210 },
  { name: "خرداد", کاربران: 2000, بازدید: 9800, فروش: 2290 },
  { name: "تیر", کاربران: 2780, بازدید: 3908, فروش: 2000 },
  { name: "مرداد", کاربران: 1890, بازدید: 4800, فروش: 2181 },
  { name: "شهریور", کاربران: 2390, بازدید: 3800, فروش: 2500 },
  { name: "مهر", کاربران: 3490, بازدید: 4300, فروش: 2100 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div
        className="text-xs sm:text-xs flex flex-col sm:gap-3 gap-1"
        style={{
          width: "100%",
          direction: "rtl",
          fontFamily: "DanaDemiBold",
          //   left:
        }}
      >
        <TitleForBoxesSections title="نمودار تعداد رشد کابران سایت" />

        <div className="bg-white dark:bg-[#212d45] rounded-sm pt-4 pb-4">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              data={data}
              syncId="anyId"
              margin={{ top: 10, right: 15, left: -20, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="کاربران"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <TitleForBoxesSections title="نمودار تعداد بازدید از سایت" />

        <div className="bg-white  dark:bg-[#212d45] rounded-sm pt-4 pb-4">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              syncId="anyId"
              margin={{ top: 10, right: 15, left: -20, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="بازدید"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
