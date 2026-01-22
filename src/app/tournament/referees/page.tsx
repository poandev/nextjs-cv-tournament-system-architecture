"use client";

import React from "react";
import MatchCard from "@/components/Referee/MatchCard";

export default function RefereeSchedulePage() {
  const venues = ["場地1", "場地2", "場地3", "場地4", "場地5", "場地6"];
  const timeSlots = ["08:00", "08:30", "09:00", "09:30", "10:00"];

  // 模擬賽事卡片數據
  const matchData = [
    {
      time: "08:00",
      venue: "場地1",
      group: "女教師組A",
      id: "1",
      teamA: "秀朗國小",
      teamB: "裕民國小",
      scoreA: 63,
      scoreB: 21,
    },
    {
      time: "08:00",
      venue: "場地2",
      group: "女教師組B",
      id: "2",
      teamA: "義學國小",
      teamB: "碧華國小",
      scoreA: 60,
      scoreB: 40,
    },
    {
      time: "08:00",
      venue: "場地3",
      group: "男教師組A",
      id: "3",
      teamA: "板橋國小",
      teamB: "埔墘國小",
      scoreA: 55,
      scoreB: 48,
    },
    {
      time: "08:00",
      venue: "場地4",
      group: "女教師組C",
      id: "4",
      teamA: "後埔國小",
      teamB: "海山國小",
      scoreA: 42,
      scoreB: 38,
    },
    {
      time: "08:30",
      venue: "場地1",
      group: "男教師組B",
      id: "5",
      teamA: "文德國小",
      teamB: "新埔國小",
      scoreA: 51,
      scoreB: 45,
    },
    {
      time: "08:30",
      venue: "場地2",
      group: "女教師組D",
      id: "6",
      teamA: "中山國小",
      teamB: "沙崙國小",
      scoreA: 58,
      scoreB: 52,
    },
    {
      time: "08:30",
      venue: "場地3",
      group: "女教師組I",
      id: "7",
      teamA: "龍埔國小",
      teamB: "民安國小",
      scoreA: 63,
      scoreB: 42,
    },
    {
      time: "08:30",
      venue: "場地5",
      group: "男教師組C",
      id: "8",
      teamA: "土城國小",
      teamB: "清水國小",
      scoreA: 47,
      scoreB: 50,
    },
    {
      time: "09:00",
      venue: "場地1",
      group: "女教師組E",
      id: "9",
      teamA: "廣福國小",
      teamB: "莒光國小",
      scoreA: 44,
      scoreB: 41,
    },
    {
      time: "09:00",
      venue: "場地2",
      group: "男教師組D",
      id: "10",
      teamA: "三峽國小",
      teamB: "介壽國小",
      scoreA: 56,
      scoreB: 53,
    },
    {
      time: "09:00",
      venue: "場地4",
      group: "女教師組F",
      id: "11",
      teamA: "鶯歌國小",
      teamB: "建國國小",
      scoreA: 49,
      scoreB: 46,
    },
    {
      time: "09:00",
      venue: "場地6",
      group: "男教師組E",
      id: "12",
      teamA: "永和國小",
      teamB: "頂溪國小",
      scoreA: 62,
      scoreB: 35,
    },
    {
      time: "09:30",
      venue: "場地1",
      group: "女教師組G",
      id: "13",
      teamA: "福和國小",
      teamB: "秀山國小",
      scoreA: 54,
      scoreB: 48,
    },
    {
      time: "09:30",
      venue: "場地3",
      group: "男教師組F",
      id: "14",
      teamA: "中和國小",
      teamB: "積穗國小",
      scoreA: 45,
      scoreB: 51,
    },
    {
      time: "09:30",
      venue: "場地4",
      group: "女教師組H",
      id: "15",
      teamA: "樹林國小",
      teamB: "武林國小",
      scoreA: 57,
      scoreB: 43,
    },
    {
      time: "09:30",
      venue: "場地5",
      group: "男教師組G",
      id: "16",
      teamA: "新莊國小",
      teamB: "榮富國小",
      scoreA: 50,
      scoreB: 47,
    },
    {
      time: "10:00",
      venue: "場地2",
      group: "女教師組J",
      id: "17",
      teamA: "五股國小",
      teamB: "成州國小",
      scoreA: 61,
      scoreB: 39,
    },
    {
      time: "10:00",
      venue: "場地3",
      group: "男教師組H",
      id: "18",
      teamA: "蘆洲國小",
      teamB: "仁愛國小",
      scoreA: 48,
      scoreB: 52,
    },
    {
      time: "10:00",
      venue: "場地5",
      group: "女教師組K",
      id: "19",
      teamA: "淡水國小",
      teamB: "天生國小",
      scoreA: 55,
      scoreB: 44,
    },
    {
      time: "10:00",
      venue: "場地6",
      group: "男教師組I",
      id: "20",
      teamA: "汐止國小",
      teamB: "北峰國小",
      scoreA: 59,
      scoreB: 41,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#E6F3F3]">
      {/* 1. 頂部資訊列 */}
      <header className="bg-[#B2E7E7] px-6 py-2 flex justify-between items-center text-[#006666] text-xs font-bold shrink-0">
        <div className="flex gap-4">
          <span>可用點數: $990,579</span>
          <span>本賽事預估最高金額: $10,740</span>
          <span>總比賽數量: 179場</span>
        </div>
      </header>

      {/* 2. 篩選控制列 */}
      <div className="bg-white p-3 px-6 border-b flex items-center gap-4 text-sm font-bold text-gray-600 shrink-0">
        <span className="text-[#2CB4B4]">篩選</span>
        {/* <div className="flex gap-8 ml-4">
          {venues.map((v) => (
            <span key={v} className="text-[#2CB4B4]">
              {v}
            </span>
          ))}
        </div> */}
      </div>

      {/* 3. 賽程矩陣主區塊 (Scrollable Area) */}
      <div className="flex-1 overflow-auto relative">
        <table className="w-full border-separate border-spacing-0 table-fixed">
          <thead className="sticky top-0 z-20">
            <tr className="bg-[#F0F9F9]">
              <th className="w-20 border-b border-r bg-[#F0F9F9]"></th>
              {venues.map((venue) => (
                <th
                  key={venue}
                  className="py-4 border-b border-r text-[#2CB4B4] font-black text-sm"
                >
                  {venue}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                {/* Y軸時間列 */}
                <td className="sticky left-0 bg-[#F0F9F9] border-b border-r text-center py-12 text-[#2CB4B4] font-black text-sm z-10">
                  {time}
                </td>

                {/* 各場地內容 */}
                {venues.map((venue) => {
                  const match = matchData.find(
                    (m) => m.time === time && m.venue === venue,
                  );

                  return (
                    <td
                      key={`${time}-${venue}`}
                      className="border-b border-r p-2 align-top bg-white/50"
                    >
                      {match ? (
                        <MatchCard match={match} />
                      ) : (
                        <div className="h-full min-h-[120px] rounded border-2 border-dashed border-gray-100 m-1" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
