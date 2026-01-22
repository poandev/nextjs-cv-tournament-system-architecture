import React from "react";
import { Printer, Upload, Download } from "lucide-react";
import TriangleBracket from "@/components/TriangleBracket";

export default function TournamentGamesDemo() {
  const teams = ["雙峰國小", "泰山國中", "瑞芳高工"];
  const results = {
    "1-2": { score: "38 : 54", status: "已結束" },
    "1-3": { score: "20 : 63", status: "已結束" },
    "2-3": { score: "50 : 63", status: "已結束" },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 頂部工具列 */}
      <div className="bg-white p-4 border-b flex justify-between items-center shadow-sm">
        <div className="flex gap-4 items-center">
          <select className="border rounded px-3 py-1 text-sm font-bold bg-gray-50 text-gray-700 outline-none">
            <option>男教師組</option>
          </select>
          <div className="flex bg-gray-100 rounded-md p-1">
            <button className="bg-[#2CB4B4] text-white px-6 py-1.5 rounded shadow-sm text-sm font-bold transition-all">
              預賽
            </button>
            <button className="px-6 py-1.5 text-sm text-gray-400 font-bold hover:text-gray-600">
              複賽
            </button>
            <button className="px-6 py-1.5 text-sm text-gray-400 font-bold hover:text-gray-600">
              決賽
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-1 text-sm font-bold text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Printer size={16} /> 列印對陣圖
          </button>
          <button className="flex items-center gap-1 text-sm font-bold text-white bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-500">
            匯入資料 <Upload size={16} />
          </button>
        </div>
      </div>

      <div className="p-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-10">
            <h2 className="text-xl font-black text-gray-800 flex items-center gap-2">
              <span className="text-[#2CB4B4] text-2xl">△</span> 單三角循環賽#A
            </h2>
            <button className="ml-4 text-[10px] font-bold border border-[#2CB4B4] text-[#2CB4B4] px-3 py-0.5 rounded-full hover:bg-[#f0ffff]">
              抽籤
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* 左側：矩陣表格 */}
            <div className="flex-1 w-full overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 w-32 h-20 bg-white relative overflow-hidden">
                      {/* 斜線裝飾 */}
                      <div className="absolute top-0 left-0 w-[150%] h-[1px] bg-gray-200 origin-top-left rotate-[25deg]"></div>
                    </th>
                    {teams.map((team) => (
                      <th
                        key={team}
                        className="border border-gray-200 p-4 text-sm font-black text-gray-700 min-w-[120px]"
                      >
                        {team}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {teams.map((rowTeam, rowIndex) => (
                    <tr key={rowTeam}>
                      <td className="border border-gray-200 p-4 text-sm font-black text-gray-700 bg-gray-50 text-center uppercase tracking-tighter">
                        {rowTeam}
                      </td>
                      {teams.map((colTeam, colIndex) => {
                        const isDiagonal = rowIndex === colIndex;
                        const matchKey =
                          rowIndex < colIndex
                            ? `${rowIndex + 1}-${colIndex + 1}`
                            : `${colIndex + 1}-${rowIndex + 1}`;
                        const match = results[matchKey as keyof typeof results];

                        return (
                          <td
                            key={colTeam}
                            className={`border border-gray-200 h-28 p-2 transition-colors ${isDiagonal ? "bg-gray-50" : "bg-white hover:bg-[#faffff]"}`}
                          >
                            {!isDiagonal && match && (
                              <div className="flex flex-col items-center justify-center h-full">
                                <span className="text-[10px] text-[#2CB4B4] font-black uppercase mb-1 tracking-widest">
                                  {match.status}
                                </span>
                                <div className="text-sm font-bold text-gray-700">
                                  {match.score}
                                </div>
                                <div className="text-[10px] text-gray-400 mt-1 scale-90 whitespace-nowrap">
                                  {rowTeam.slice(0, 2)} vs {colTeam.slice(0, 2)}
                                </div>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 右側：三角形視覺圖 */}
            <div className="w-full lg:w-max flex flex-col items-center border-l border-dashed border-gray-100 pl-8">
              <p className="text-[10px] font-bold text-gray-300 mb-8 uppercase tracking-widest italic">
                Visual Representation
              </p>
              <TriangleBracket />
              <div className="mt-10 text-[10px] text-gray-400 text-center leading-relaxed">
                * 點擊圖示可進入計分介面
                <br />* 數據與左側表格同步
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
