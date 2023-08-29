// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const storee = create((set, get) => ({
//   dark: false,
//   isDark: () => set({ dark: !get().dark }),
// }));

// storee = persist(storee, { theme: "theme" });

// export default storee;

import { create } from "zustand";

const openModal = create((set, get) => ({
  dark: false,
  isDark: () => set({ dark: !get().dark }),
}));

export default openModal;
