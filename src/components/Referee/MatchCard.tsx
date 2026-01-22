"use client";

import React, { useState } from "react";
import { MoreVertical, FileText, Download, Edit3, X } from "lucide-react";

interface Match {
  id: string;
  group: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  venue: string;
}

export default function MatchCard({ match }: { match: Match }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <div className="relative bg-white rounded border border-gray-200 shadow-sm overflow-visible group hover:shadow-md transition-shadow">
        {/* 1. 卡片頂部 */}
        <div className="bg-gray-100 p-2 flex justify-between items-center relative">
          <div className="text-[10px] font-bold">
            <span className="text-gray-800">{match.group}</span>
            <p className="text-gray-400 font-medium tracking-tighter">
              比賽編號: {match.id}
            </p>
          </div>

          {/* 三個點按鈕 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
          >
            <MoreVertical size={14} />
          </button>

          {/* 浮動選項選單 (Pop-over) */}
          {showMenu && (
            <div className="absolute right-0 top-10 w-40 bg-white border border-gray-100 shadow-xl rounded-md z-[30] py-1 animate-in fade-in zoom-in duration-200">
              <div className="px-3 py-2 text-[10px] font-bold text-gray-400 border-b">
                控制比賽
              </div>
              <button
                onClick={() => {
                  setShowDrawer(true);
                  setShowMenu(false);
                }}
                className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-gray-50 text-gray-700 font-bold"
              >
                <FileText size={14} /> 完整資訊
              </button>
              <button className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-gray-50 text-gray-700 font-bold">
                <Download size={14} /> 下載出賽名單
              </button>
            </div>
          )}
        </div>

        {/* 2. 比分資訊 (點擊卡片本體也可開啟 Drawer) */}
        <div className="p-3 cursor-pointer" onClick={() => setShowDrawer(true)}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-gray-700 w-16 truncate">
              {match.teamA}
            </span>
            <span className="text-xs font-bold text-gray-700 w-16 truncate text-right">
              {match.teamB}
            </span>
          </div>
          <div className="flex justify-between items-center px-2">
            <span
              className={`text-xl font-black ${match.scoreA > match.scoreB ? "text-[#2CB4B4]" : ""}`}
            >
              {match.scoreA}
            </span>
            <span
              className={`text-xl font-black ${match.scoreB > match.scoreA ? "text-[#2CB4B4]" : ""}`}
            >
              {match.scoreB}
            </span>
          </div>
        </div>
      </div>

      {/* 3. 右側詳細資訊欄 (Drawer Layer) */}
      {showDrawer && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* 背景遮罩 */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setShowDrawer(false)}
          />

          {/* Drawer 內容 */}
          <div className="relative w-full max-w-md bg-[#E6F3F3] h-full shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <header className="bg-[#2CB4B4] p-4 flex justify-between items-center text-white">
              <h3 className="font-bold">比賽卡片{match.id}</h3>
              <button
                onClick={() => setShowDrawer(false)}
                className="hover:rotate-90 transition-transform"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 text-black overflow-y-auto p-4 space-y-4">
              {/* 這裡依據圖片還原比賽細節 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-[#2CB4B4] font-black text-lg mb-4">
                  {match.group}
                </div>
                <div className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div className="text-sm font-bold">
                    {match.teamA}{" "}
                    <span className="text-[#2CB4B4] ml-2 text-xl">
                      {match.scoreA}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-right">
                    <span className="text-xl mr-2 text-gray-300">
                      {match.scoreB}
                    </span>{" "}
                    {match.teamB}
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-gray-500 font-bold">
                  <p>比賽時間：2023-12-16 08:00</p>
                  <p>比賽場地：{match.venue}</p>
                </div>
              </div>

              {/* 賽點明細模擬 */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xs font-bold text-gray-400 mb-3 border-b pb-2">
                  賽點數 (3)
                </div>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 border-b last:border-0 text-xs font-bold"
                  >
                    <span>2-{i}</span>
                    <span className="text-gray-400">15 : 21</span>
                    <span className="text-[#2CB4B4]">已結束</span>
                  </div>
                ))}
              </div>
            </div>

            <footer className="p-4 bg-white border-t flex justify-center">
              <button className="flex items-center gap-2 text-[#2CB4B4] border border-[#2CB4B4] px-10 py-2 rounded-lg font-bold hover:bg-[#F0FFFF]">
                <Edit3 size={16} /> 全局修改
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* 點擊外部關閉選單的遮罩 */}
      {showMenu && (
        <div
          className="fixed inset-0 z-[25]"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
}
