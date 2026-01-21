# 企業級賽事管理系統 (Enterprise Tournament Management System)

這是一個基於 **Next.js** 與 **TypeScript** 開發的高性能、即時賽事管理解決方案，專為大規模體育賽事設計。本專案展示了複雜前端系統的架構設計能力，包含即時數據同步、動態賽程排演以及多角色權限控制。

---

## 🚀 技術亮點 (Technical Highlights)

* **開發框架：** 使用 **Next.js 14+ (App Router)**，優化伺服器端渲染 (SSR) 效能與 SEO。
* **開發語言：** 採用 **嚴格型別 TypeScript**，在複雜的資料模型下確保程式碼的健壯性與可維護性。
* **狀態管理：** 整合 **TanStack Query (React Query)**，實現高效的伺服器狀態快取與非同步資料處理。
* **介面設計：** 使用 **Tailwind CSS**，並遵循 **行動優先 (Mobile-first)** 原則，確保裁判在比賽現場能透過行動裝置流暢操作。
* **即時通訊：** 架構支援 **WebSocket/SSE** 整合，確保現場比分與賽程變動能即時同步給所有使用者。

---

## 🏗 核心架構設計 (Key Architectures)

### 1. 高性能比分同步機制
實作 **樂觀更新 (Optimistic UI)** 模式，當裁判輸入比分時提供低延遲的視覺回饋，並在背景自動完成與後端 API 的同步，確保操作流暢性。

### 2. 動態賽事對陣圖 (Dynamic Brackets)
利用 **遞迴組件結構 (Recursive Components)** 實作動態對陣圖，能根據即時種子排名 (Seed Data) 自動渲染單敗淘汰或雙敗淘汰等複雜賽制。

### 3. 模組化 API 服務層
建構具備高度可擴展性的 API 服務層，包含自動化錯誤處理、Token 自動轉發 (Rotation) 以及請求去重 (
