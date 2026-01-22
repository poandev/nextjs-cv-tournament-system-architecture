"use client";

import React, { useState } from "react";
import {
  Menu,
  Flag,
  Calendar,
  Users,
  Table,
  User,
  LayoutGrid,
  Clock,
  Archive,
  Eye,
  Maximize,
  GraduationCap,
  CircleDollarSign,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: <Flag />, label: "賽事概覽", href: "/dashboard" },
    { icon: <Calendar />, label: "賽程管理", href: "/tournament/schedule" },
    // 比賽管理
    { icon: <Table />, label: "比賽管理", href: "/tournament/games" },
    // 裁判總表
    { icon: <LayoutGrid />, label: "裁判總表", href: "/tournament/referees" },
  ];

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed left-0 top-0 h-full bg-[#2CB4B4] text-white transition-all duration-300 z-50 flex flex-col items-center py-4 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      {/* 頂部漢堡選單圖示 */}
      <div className="mb-8 cursor-pointer hover:bg-[#249c9c] p-2 rounded transition-colors">
        <Menu size={28} strokeWidth={2.5} />
      </div>

      {/* 選單列表 */}
      <nav className="flex-1 w-full space-y-2 px-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-4 p-2 rounded hover:bg-[#ffffff20] transition-colors group"
          >
            <div className="min-w-[40px] flex justify-center scale-110">
              {item.icon}
            </div>
            {isExpanded && (
              <span className="font-bold text-sm whitespace-nowrap overflow-hidden">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* 底部登出按鈕 (還原截圖效果) */}
      <button className="mt-auto w-12 h-12 bg-[#1e8a8a] shadow-inner rounded flex items-center justify-center font-bold text-sm hover:bg-[#187070] transition-all">
        {isExpanded ? "登出" : "登出"}
      </button>
    </aside>
  );
}
