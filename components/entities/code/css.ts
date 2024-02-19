import { default_css_code } from "@/const/default-code"
import { create } from "zustand"

type State = {
  css_code: string
  setCssCode: (code: string) => void
}
export const useCSS = create<State>((set) => ({
  css_code: default_css_code,
  setCssCode: (code) => set({ css_code: code })
}))