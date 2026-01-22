import React from "react";

interface TeamScore {
  id: number;
  name: string;
  points: number; // 該隊在對戰中拿到的分數
}

interface MatchInfo {
  matchId: string;
  date: string;
  time: string;
}

export default function TriangleBracket() {
  // 模擬數據：1-雙峰國小, 2-泰山國中, 3-瑞芳高工
  const matches: Record<string, MatchInfo> = {
    "1-2": { matchId: "[1]", date: "2023/12/16", time: "13:30" },
    "1-3": { matchId: "[2]", date: "2023/12/16", time: "08:30" },
    "2-3": { matchId: "[3]", date: "2023/12/16", time: "10:30" },
  };

  return (
    <div className="flex items-center justify-center p-20 bg-white">
      {/* 容器固定寬高以利定位 */}
      <div className="relative w-80 h-72">
        {/* SVG 背景線條：負責繪製三角形三邊 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
        >
          <path
            d="M 50,15 L 15,85 L 85,85 Z"
            fill="none"
            stroke="#B2E7E7"
            strokeWidth="0.5"
          />
        </svg>

        {/* 頂點 1：上方 (雙峰國小) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
          <p className="text-[#2CB4B4] text-xs font-bold">雙峰國小</p>
          <h2 className="text-[#2CB4B4] text-3xl font-black">1</h2>
        </div>

        {/* 頂點 2：左下 (泰山國中) */}
        <div className="absolute bottom-0 left-0 text-center -translate-x-1/4">
          <div className="flex flex-col items-center">
            <h2 className="text-[#2CB4B4] text-3xl font-black">2</h2>
            <p className="text-gray-800 text-xs font-bold">泰山國中</p>
          </div>
        </div>

        {/* 頂點 3：右下 (瑞芳高工) */}
        <div className="absolute bottom-0 right-0 text-center translate-x-1/4">
          <div className="flex flex-col items-center">
            <h2 className="text-[#2CB4B4] text-3xl font-black">3</h2>
            <p className="text-gray-800 text-xs font-bold">瑞芳高工</p>
          </div>
        </div>

        {/* --- 比分與賽次標記 --- */}

        {/* 邊線 1-2 之間 (左側) */}
        <div className="absolute top-[40%] left-[10%] text-right space-y-1">
          <p className="text-[#2CB4B4] text-[10px] font-bold leading-none">
            {matches["1-2"].matchId}
          </p>
          <p className="text-[#2CB4B4] text-[10px] leading-none">
            {matches["1-2"].date}
          </p>
          <p className="text-[#2CB4B4] text-[10px] leading-none">
            {matches["1-2"].time}
          </p>
          <div className="flex gap-16 mt-2">
            <span className="text-gray-800 text-xl font-medium">38</span>
            <span className="text-gray-800 text-xl font-medium">54</span>
          </div>
        </div>

        {/* 邊線 1-3 之間 (右側) */}
        <div className="absolute top-[40%] right-[10%] text-left space-y-1">
          <p className="text-[#2CB4B4] text-[10px] font-bold leading-none">
            {matches["1-3"].matchId}
          </p>
          <p className="text-[#2CB4B4] text-[10px] leading-none">
            {matches["1-3"].date}
          </p>
          <p className="text-[#2CB4B4] text-[10px] leading-none">
            {matches["1-3"].time}
          </p>
          <div className="flex gap-16 mt-2">
            <span className="text-gray-800 text-xl font-medium">20</span>
            <span className="text-gray-800 text-xl font-medium">63</span>
          </div>
        </div>

        {/* 邊線 2-3 之間 (底部) */}
        <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-center space-y-1">
          <div className="flex items-center gap-10">
            <span className="text-gray-800 text-xl font-medium">50</span>
            <div className="flex flex-col">
              <p className="text-[#2CB4B4] text-[10px] font-bold leading-none">
                {matches["2-3"].matchId}
              </p>
              <p className="text-[#2CB4B4] text-[10px] leading-none">
                {matches["2-3"].date}
              </p>
              <p className="text-[#2CB4B4] text-[10px] leading-none">
                {matches["2-3"].time}
              </p>
            </div>
            <span className="text-gray-800 text-xl font-medium">63</span>
          </div>
        </div>
      </div>
    </div>
  );
}
