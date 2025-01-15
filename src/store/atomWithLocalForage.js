import { atom } from "jotai";
import localforage from "localforage";

const atomWithLocalForage = (key, initialValue) => {
  // 基礎 atom，儲存初始值
  const baseAtom = atom(initialValue);

  // 當 atom 被掛載時，從 localForage 載入數據
  baseAtom.onMount = (setValue) => {
    (async () => {
      const savedValue = await localforage.getItem(key);
      if (savedValue !== null) {
        setValue(savedValue);
      }
    })();
  };

  // 派生 atom，包含寫入 localForage 的邏輯
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localforage.setItem(key, nextValue);
    }
  );

  return derivedAtom;
};

export default atomWithLocalForage;
