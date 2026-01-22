"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Users,
  ClipboardList,
  UserCheck,
  Plus,
} from "lucide-react";
import Switch from "@/components/Switch";
import WelcomeModal from "@/components/WelcomeModal";

export default function TournamentDashboard() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <div className="flex min-h-screen bg-[#E6F3F3]">
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseModal} />
      {/* 側邊欄 Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-5 space-y-8">
        <div className="flex items-center gap-2 text-[#2CB4B4] mb-4">
          <div className="w-8 h-8 bg-[#2CB4B4] rounded flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-700">
            CONVEN
          </span>
        </div>

        {/* 搜尋區 */}
        <div className="space-y-4">
          <section>
            <h3 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Search size={16} /> 依關鍵字搜尋
            </h3>
            <input
              type="text"
              placeholder="輸入關鍵字"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-[#2CB4B4]"
            />
          </section>

          {/* 狀態篩選 - 僅靜態展示 */}
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-gray-700 mb-2 italic underline decoration-[#2CB4B4]">
              依狀態搜尋
            </h3>
            {["全部", "準備中", "進行中", "已結束"].map((status, idx) => (
              <label
                key={status}
                className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={idx === 0}
                  className="rounded border-gray-300 text-[#2CB4B4] focus:ring-[#2CB4B4]"
                />
                {status}
              </label>
            ))}
          </section>
        </div>
      </aside>

      {/* 右側主內容區 */}
      <main className="flex-1 flex flex-col">
        {/* 頂部資訊列 */}
        <header className="bg-[#B2E7E7] px-8 py-2 flex justify-between items-center text-[#006666] text-sm font-bold">
          <span>可用點數: $999,999</span>
        </header>

        {/* 內容區塊 */}
        <div className="p-10 space-y-6 relative h-full">
          {/* 賽事卡片元件 */}
          <div className="bg-white rounded-lg shadow-sm border-t-[10px] border-[#2CB4B4] p-8 max-w-5xl flex justify-between group hover:shadow-md transition-shadow">
            <div className="space-y-6 flex-1">
              <div>
                <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                  <Switch defaultChecked={true} />
                  113 年度新北市公立高中職暨國中小教師健康促進羽球賽
                </h2>
                <p className="text-lg text-gray-600 mt-1 font-bold">板橋國小</p>
              </div>

              <div className="space-y-1 text-gray-500 font-medium">
                <p className="flex items-center gap-2">
                  <Calendar size={18} /> 活動日期：2024-12-21 至 2024-12-21
                </p>
                <p className="flex items-center gap-2">
                  📍 活動地點：220新北市板橋區文化路一段23號
                </p>
              </div>

              {/* 功能按鈕區 */}
              <div className="grid grid-cols-4 gap-4 mt-8">
                {[
                  { label: "賽事管理", icon: <Calendar />, enabled: false },
                  {
                    label: "賽程管理",
                    icon: <ClipboardList />,
                    enabled: true,
                    href: "/tournament/schedule",
                  },
                  { label: "選手管理", icon: <Users />, enabled: false },
                  { label: "報名管理", icon: <UserCheck />, enabled: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    disabled={!item.enabled}
                    className={`
                      border-2 py-5 rounded-lg flex flex-col items-center gap-2 transition-all font-bold
                      ${
                        item.enabled
                          ? "border-[#2CB4B4] text-[#2CB4B4] hover:bg-[#F0FFFF] cursor-pointer"
                          : "border-gray-300 text-gray-400 cursor-not-allowed opacity-60"
                      }
                    `}
                  >
                    {item.enabled ? (
                      <Link
                        href={item.href || "#"}
                        className="w-full h-full flex flex-col items-center gap-2"
                      >
                        <span className="scale-125">{item.icon}</span>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <span className="scale-125">{item.icon}</span>
                        {item.label}
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 右側狀態圖示 */}
            <div className="flex flex-col items-end justify-between ml-10">
              <span className="text-gray-400 font-bold text-lg">已結束</span>
              {/* 模擬羽球浮水印或圖示 */}
              <div className="opacity-10 scale-150 rotate-12 mb-10 text-[#2CB4B4]">
                <Calendar size={120} />
              </div>
            </div>
          </div>

          {/* 右下角懸浮按鈕 */}
          <button className="fixed bottom-10 right-10 w-16 h-16 bg-[#2CB4B4] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
            <Plus size={32} strokeWidth={3} />
          </button>
        </div>
      </main>
    </div>
  );
}
