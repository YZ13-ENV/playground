import { create } from 'zustand'
import { VscSplitHorizontal, VscSplitVertical, VscLayoutStatusbar } from "react-icons/vsc"

export type Tab = {
  value: string
  label: string
  icon?: JSX.Element
}
export const tabs: Tab[] = [
  {
    value: "horizontal",
    label: "Горизонтальный",
    icon: <VscSplitHorizontal size={16} />
  },
  {
    value: "vertical",
    label: "Вертикальный",
    icon: <VscSplitVertical size={16} />
  }
]
type State = {
  tab: string
  setTab: (tab: string) => void
}

export const useTab = create<State>((set) => ({
  tab: tabs[0].value,
  setTab: (tab: string) => set({ tab: tab })
}))