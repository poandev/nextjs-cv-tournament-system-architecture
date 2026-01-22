"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* 技術聲明與簡介區塊 */}
      <div className="mb-8 p-6 bg-white border-l-4 border-[#2CB4B4] rounded-r-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-gray-800">
              CV Tournament DEMO LITE{" "}
              <span className="text-[#2CB4B4] font-medium text-sm ml-2">
                Lite Demo
              </span>
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
              本專案為<strong>康凡賽務系統（Convensports）</strong>
              之前端架構精簡演示版。身為具備 5-6 年經驗的全端工程師， 我採用了{" "}
              <strong>Next.js (App Router)</strong> 與{" "}
              <strong>TypeScript</strong> 進行重構，旨在展示企業級系統的 UI
              規格與元件化設計思維。
            </p>
            <div className="flex gap-4 mt-3">
              <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500 rounded font-mono">
                #NextJs15
              </span>
              <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500 rounded font-mono">
                #TypeScript
              </span>
              <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500 rounded font-mono">
                #TailwindCSS
              </span>
            </div>
          </div>

          {/* 保密條款提示 */}
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-md max-w-[200px]">
            <div className="text-amber-700 text-xs font-bold flex items-center gap-1 mb-1">
              ⚠️ Compliance Notice
            </div>
            <p className="text-[10px] text-amber-600 leading-tight">
              因保密條款 (NDA) 限制，本 Demo 僅展示 UI
              架構與前端開發風格，已移除所有特定商業邏輯與私有 API 數據。
            </p>
          </div>
        </div>
        <div
          className="mt-6 flex justify-center text-white bg-[#2CB4B4] hover:bg-[#26a3a3] cursor-pointer px-4 py-2 rounded-md text-sm font-bold"
          onClick={() => router.push("/dashboard")}
        >
          <span>跳轉 Dashboard</span>
        </div>
      </div>
    </div>
  );
}
