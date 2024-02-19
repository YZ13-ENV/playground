import { create } from "zustand"

type State = {
  js_code: string
  setJsCode: (code: string) => void
}
export const useJS = create<State>((set) => ({
  js_code: '',
  setJsCode: (code) => set({ js_code: code })
}))