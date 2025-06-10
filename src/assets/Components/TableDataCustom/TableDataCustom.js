import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { users } from "../../../LocalData/LocalData";
export default function TableDataCustom() {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPageShow, setRowPageShow] = useState(8);
    const totalPage = Math.ceil(users.length / rowPageShow);
    const handlePageForShow = (sum) => {
        setCurrentPage(sum);
    };
    const startIndex = (currentPage - 1) * rowPageShow;
    const currentItems = users.slice(startIndex, startIndex + rowPageShow);
    const handlePageForPrev = () => {
        setCurrentPage((prev) => prev - 1);
    };
    const handlePageForNext = () => {
        setCurrentPage((prev) => prev + 1);
    };
    return (_jsxs("div", { className: "overflow-x-auto pb-10 ", children: [_jsxs("table", { className: "min-w-full   dark:bg-[#212d45] bg-white  rounded-sm  text-right", children: [_jsx("thead", { className: "  dark:bg-[#2b3547d1] dark:text-white border-b-2 dark:border-b-2 border-sky-800 border-solid", children: _jsxs("tr", { className: "& > *:text-x & > *:text-sm & > *:px-4 & > *:py-2 ", children: [_jsx("th", { className: "", children: "\u0634\u0645\u0627\u0631\u0647" }), _jsx("th", { className: "", children: "\u0646\u0627\u0645" }), _jsx("th", { className: "", children: "\u0627\u06CC\u0645\u06CC\u0644" }), _jsx("th", { className: "", children: "\u0646\u0642\u0634" }), _jsx("th", { className: "", children: "\u0648\u06CC\u0631\u0627\u06CC\u0634" }), _jsx("th", { className: "", children: "\u0628\u0646" })] }) }), _jsx("tbody", { className: " dark:text-dark-menu", children: currentItems.map((user) => (_jsxs("tr", { className: "& > *:px-4 & > *:py-2 pt-1 & > *:text-x font-Dana-Demi-bold", children: [_jsx("td", { className: "bg-green-800 text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2", children: user.id }), _jsx("td", { children: user.name }), _jsx("td", { children: user.email }), _jsx("td", { children: user.role == 1 ? "ادمین" : "کاربر" }), _jsx("td", { className: "", children: _jsx("svg", { className: "w-5 h-5 cursor-pointer hover:text-sky-600 mr-2", children: _jsx("use", { href: "#paint-brush" }) }) }), _jsx("td", { className: "px-4 py-2 cursor-pointer ", children: _jsx("svg", { className: "w-5 h-5 dark:text-red-600 hover:text-red-600 transition-all", children: _jsx("use", { href: "#trash " }) }) })] }))) })] }), _jsxs("div", { className: "flex items-center justify-center mt-5 gap-2", children: [_jsx("button", { disabled: currentPage === 1, onClick: () => handlePageForPrev(), className: ` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${currentPage === 1 ? "bg-slate-300 text-gray-800" : "text-white hover:bg-sky-900  bg-sky-800"} transition-all`, children: _jsx("svg", { className: "w-5 h-5", children: _jsx("use", { href: "#chevron-right" }) }) }), [...Array(totalPage)].map((_, index) => (_jsx("button", { onClick: () => handlePageForShow(index + 1), className: `${currentPage == index + 1 ? "bg-green-800 dark:bg-zinc-950" : " bg-green-600 "} cursor-pointer transition-all dark:bg-[#212d45] w-10 text-white rounded-sm h-10`, children: index + 1 }, index + 1))), _jsx("button", { disabled: currentPage === totalPage, onClick: () => handlePageForNext(), className: ` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${currentPage === totalPage ? "bg-slate-300 text-gray-800" : "text-white hover:bg-sky-900  bg-sky-800"} transition-all`, children: _jsx("svg", { className: "w-5 h-5", children: _jsx("use", { href: "#chevron-left" }) }) })] })] }));
}
