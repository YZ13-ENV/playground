import { create } from 'zustand'
export type Tab = {
  label: string
  value: string
  icon?: JSX.Element
}
type State = {
  tab: Tab['value']
  setTab: (tab: Tab['value']) => void
}
export const tabs: Tab[] = [
  {
    label: "HTML",
    value: "html"
  },
  {
    label: "CSS",
    value: "css"
  },
  {
    label: "JS",
    value: "javascript"
  }
]
export const useEditorTab = create<State>((set) => ({
  tab: tabs[0].value,
  setTab: (tab: Tab['value']) => set({ tab: tab })
}))