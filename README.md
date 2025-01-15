# React Todo List

一個使用 React 開發的現代化待辦事項清單應用。

## 技術棧

### 核心技術
- React 18
- React Router v7
- Tailwind CSS
- Jotai (狀態管理)

### 主要依賴
- `classnames`: 用於條件式樣式管理
- `localforage`: 用於本地數據持久化
- `uuid`: 生成唯一識別碼

## 技術要點

### 狀態管理
- 使用 Jotai 進行全局狀態管理
- 實現了自定義的 `atomWithLocalForage` 來持久化存儲數據
- 通過 URL 獲得排序狀態

