# 企業級賽事管理系統 (Enterprise Tournament Management System)

> **實戰規模：** 成功運營 **4,500+ 選手**、跨 **22 個國家** 的國際賽事，峰值處理 **300+ 場並發賽事**

基於 **Next.js + TypeScript** 開發的生產級賽事管理系統，涵蓋選手報名、金流對帳、即時計分到跨平台 App 的完整解決方案。

---

## 🌟 核心亮點

### 💰 金流自動化

- 整合 **ECPay / NewebPay** 金流 API，實現報名繳費自動化
- 開發 **智慧對帳引擎**：每日自動比對交易明細，異常即時通知
- 累計處理金額超過 **NT$ 200 萬**，人工對帳時間減少 **95%**

### ⚡ 即時通訊 (WebSocket)

- 裁判 App 加分瞬間，場邊電視牆與直播同步更新 (延遲 **< 150ms**)
- 支援 **4,500 人同時在線**，使用 Redis Pub/Sub 實現跨伺服器廣播

### 📱 跨平台 App (iOS / Android)

- 針對 **年長裁判** 設計極簡介面：超大觸控按鈕、語音提示、離線快取

---

## 🚀 技術棧

- **前端：** Next.js 14 (App Router)、TypeScript、Tailwind CSS
- **狀態管理：** TanStack Query、Zustand
- **即時通訊：** WebSocket、Server-Sent Events
- **金流整合：** ECPay、NewebPay
- **部署：** Vercel + AWS + Redis Cluster

---

## 📊 效能指標

| 項目         | 數據    |
| ------------ | ------- |
| 同時在線人數 | 4,500+  |
| 比分同步延遲 | < 150ms |
| 系統可用性   | 99.97%  |
