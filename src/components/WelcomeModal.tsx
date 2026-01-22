"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, Info } from "lucide-react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* 彈出視窗 */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-8 animate-fadeIn">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* 標題 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#2CB4B4] rounded-full flex items-center justify-center">
            <Info size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            歡迎來到賽事管理系統 DEMO LITE
          </h2>
        </div>

        {/* 內容 */}
        <div className="space-y-4 text-gray-600">
          <p>這是一個DEMO版本</p>
          <Link
            href="https://competition.convensports.com/login"
            className="text-[#2CB4B4] font-bold hover:underline"
          >
            點擊，前往官方賽事管理系統。
          </Link>

          <div className="bg-[#E6F3F3] rounded-lg p-6 space-y-3">
            <h3 className="font-bold text-gray-800 mb-3">主要功能說明：</h3>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#2CB4B4] font-bold">•</span>
                <p>
                  <strong>賽事管理：</strong>查看和管理所有賽事的基本資訊
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#2CB4B4] font-bold">•</span>
                <p>
                  <strong>賽程管理：</strong>設定賽程、安排比賽時間與場地
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#2CB4B4] font-bold">•</span>
                <p>
                  <strong>比賽管理：</strong>管理比賽細節與結果登錄
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#2CB4B4] font-bold">•</span>
                <p>
                  <strong>裁判總表：</strong>處理及時比賽比分與裁判指派
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 確認按鈕 */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#2CB4B4] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#239999] transition-colors"
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  );
}
