import { default_code } from "@/const/default-code"
import { create } from "zustand"

type State = {
  html_code: string
  setHtmlCode: (code: string) => void
}
export const useHTML = create<State>((set) => ({
  html_code: default_code,
  setHtmlCode: (code) => set({ html_code: code })
}))