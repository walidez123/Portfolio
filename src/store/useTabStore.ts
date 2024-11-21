import { create } from 'zustand';

export interface Tab {
  id: string;
  title: string;
  path: string;
  icon?: string;
}

interface TabState {
  tabs: Tab[];
  activeTab: string | null;
  addTab: (tab: Tab) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

export const useTabStore = create<TabState>((set) => ({
  tabs: [],
  activeTab: null,
  addTab: (tab) =>
    set((state) => ({
      tabs: state.tabs.some((t) => t.id === tab.id)
        ? state.tabs
        : [...state.tabs, tab],
      activeTab: tab.id,
    })),
  removeTab: (id) =>
    set((state) => ({
      tabs: state.tabs.filter((tab) => tab.id !== id),
      activeTab:
        state.activeTab === id
          ? state.tabs[state.tabs.length - 2]?.id || null
          : state.activeTab,
    })),
  setActiveTab: (id) => set({ activeTab: id }),
}));