"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

import React from "react";
import {
  Trophy,
  Target,
  Zap,
  CheckCircle,
  Server,
  Smartphone,
  Layout,
  Globe,
  Users,
  DollarSign,
} from "lucide-react";

const HOME = () => {
  const router = useRouter();
  const techStack = [
    "React",
    "WebSocket",
    "iOS/Swift",
    "Node.js",
    "Financial API",
    "Cloud SaaS",
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      {/* Header / Hero Section */}
      <header className="bg-blue-900 text-white py-16 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                康凡賽務企業級管理系統
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                定義現代化智慧場館標準：從傳統紙本轉型為雲端原生賽務生態系。
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-2xl border border-blue-700">
              <div className="text-3xl font-bold text-yellow-400">4,500+</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">
                參賽選手支持
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-800 text-blue-100 rounded-full text-sm font-medium border border-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-8">
            <div
              className="mt-6 flex h-20 justify-center text-white bg-[#2CB4B4]/50 hover:bg-[#26a3a3] cursor-pointer px-4 py-2 rounded-md text-lg font-bold items-center w-fit"
              onClick={() => router.push("/dashboard")}
            >
              <span>因保密協議僅能提供簡易DEMO版本以供參考</span>
              {/* <span>點擊跳轉 DEMO Dashboard</span> */}
            </div>
            <div
              className="mt-6 flex h-20 justify-center text-white bg-[#2CB4B4]/50 hover:bg-[#26a3a3] cursor-pointer px-4 py-2 rounded-md text-lg font-bold items-center w-fit"
              // onClick={() => router.push("/dashboard")}
            >
              <Link
                href="https://competition.convensports.com/login"
                className="flex items-center justify-center w-full h-full"
                target="_blank"
              >
                <span>康凡賽務官方網站</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-10">
        {/* STAR Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Situation Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-6 text-blue-600">
              <Globe className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">Situation (情境)</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                在引入系統前，大型賽事（如世界清晨盃）面臨嚴重的
                <strong>數位落差</strong>
                。傳統紙本作業導致數據處理負荷爆炸、現場資訊不對稱，以及財務對帳困難。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>參賽人數破 4,500 人，人工處理極易出錯。</li>
                <li>選手需往返檢錄台查詢賽程，導致現場動線混亂。</li>
                <li>數百萬報名費依賴手動核對匯款後五碼，效率極低。</li>
              </ul>
            </div>
          </div>

          {/* Task Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-6 text-orange-500">
              <Target className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">Task (任務)</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                建構「數位生態系」，實現從賽前規劃到賽後數據沉澱的全面數位轉型。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>全流程整合</strong>
                  ：打破資訊孤島，串接報名、金流、賽務到現場支援。
                </li>
                <li>
                  <strong>金流自動化</strong>：實作
                  ATM、信用卡、超商等多渠道自動對帳。
                </li>
                <li>
                  <strong>毫秒級同步</strong>
                  ：場地計分與雲端、直播訊號必須即時連線。
                </li>
              </ul>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-6 text-green-600">
              <Zap className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">Action (行動)</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>採取模組化執行策略，開發跨平台核心架構：</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>雲端中台</strong>：利用 WebSocket
                  實作即時比分連線與智慧排程演算法。
                </li>
                <li>
                  <strong>計分助手 App</strong>：為裁判開發極簡化平板
                  App，內建羽/桌球規則引擎與斷線補傳機制。
                </li>
                <li>
                  <strong>數位燈塔</strong>：串接 API
                  實現「直播自動比分疊加」，讓業餘賽事擁有職業級轉播質感。
                </li>
              </ul>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-6 text-purple-600">
              <Trophy className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">Result (結果)</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>系統於超大型國際賽事中穩定運行，達成商業與社會效益雙贏：</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>高穩定性</strong>：世界清晨盃 22 國、4,500
                  選手零當機運行。
                </li>
                <li>
                  <strong>效能卓越</strong>：財務對帳 100%
                  精確，檢錄台詢問流量減少 80%。
                </li>
                <li>
                  <strong>市場成功</strong>：建立 SaaS
                  訂閱與硬體租賃服務模式，成功拓展至多項全國性賽事。
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* System Module Highlights */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">核心技術模組</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <Users className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <h4 className="font-bold mb-1">報名管理</h4>
              <p className="text-sm text-gray-500">虛擬帳號自動對帳</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <Layout className="w-10 h-10 mx-auto mb-3 text-green-600" />
              <h4 className="font-bold mb-1">智慧排程</h4>
              <p className="text-sm text-gray-500">自動避開兼項衝突</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl text-center">
              <Smartphone className="w-10 h-10 mx-auto mb-3 text-orange-600" />
              <h4 className="font-bold mb-1">現場計分</h4>
              <p className="text-sm text-gray-500">裁判端 App 即時同步</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <Server className="w-10 h-10 mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-1">雲端轉播</h4>
              <p className="text-sm text-gray-500">比分疊加 API 直播</p>
            </div>
          </div>
        </div>

        {/* Closing / Contact Note */}
        <div className="mt-16 bg-gray-900 text-white p-10 rounded-3xl text-center">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">專案總結</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            本專案不僅是軟體工具的開發，更是對體育行政流程的深度重構。透過數位賦能，成功讓業餘賽事展現出企業級的高運營效率。
          </p>
        </div>
      </main>
    </div>
  );
};

export default HOME;
