import React from "react";
import {
  Search,
  Plus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ScheduleManagement() {
  const schedules = [
    {
      id: 1,
      group: "男子組",
      event: "男教師組",
      type: "團體賽",
      participants: 439,
      status: "已完成",
    },
    {
      id: 2,
      group: "女子組",
      event: "女教師組",
      type: "團體賽",
      participants: 257,
      status: "已完成",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 頂部資訊列 */}
      <header className="bg-[#B2E7E7] px-4 py-2 flex gap-6 items-center text-[#006666] text-sm font-bold border-b border-[#92d1d1]">
        <span>可用點數: $990,579</span>
        <span>本賽事預估最高金額: $9,000</span>
        <span>總比賽數量: 150場</span>
      </header>

      {/* 功能列 */}
      <div className="px-4 py-3 flex items-center gap-6 border-b border-gray-100 shadow-sm">
        <button className="flex items-center gap-1 text-[#2CB4B4] font-bold text-sm hover:opacity-80">
          <Search size={16} /> 篩選搜尋
        </button>
        <button className="flex items-center gap-1 text-[#2CB4B4] font-bold text-sm hover:opacity-80 text-blue-500">
          <Plus size={16} /> 新增
        </button>
      </div>

      {/* 表格內容 */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-gray-800">
              <th className="px-6 py-4 font-black">編號</th>
              <th className="px-6 py-4 font-black">分組</th>
              <th className="px-6 py-4 font-black">賽程</th>
              <th className="px-6 py-4 font-black">競賽類型</th>
              <th className="px-6 py-4 font-black">選手人數</th>
              <th className="px-6 py-4 font-black text-right">狀態</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                  {item.id}
                </td>
                <td className="px-6 py-4 font-bold text-gray-800">
                  {item.group}
                </td>
                <td className="px-6 py-4 text-gray-700">{item.event}</td>
                <td className="px-6 py-4 text-gray-700">{item.type}</td>
                <td className="px-6 py-4 font-mono text-gray-600">
                  {item.participants}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1 border border-[#2CB4B4] text-[#2CB4B4] px-3 py-1 rounded-full text-xs font-bold">
                    <CheckCircle2 size={14} /> {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 底部分頁與統計 */}
      <footer className="p-4 border-t border-gray-100 flex justify-end items-center gap-6 text-sm text-gray-500">
        <div>Total : {schedules.length}</div>
        <div className="flex items-center gap-2">
          每頁筆數 :
          <select className="border border-gray-300 rounded px-1 py-0.5">
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span>1 / 1</span>
          <div className="flex gap-1 text-gray-300">
            <ChevronLeft className="cursor-not-allowed" size={20} />
            <ChevronRight className="cursor-not-allowed" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}
