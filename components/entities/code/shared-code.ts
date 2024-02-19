import { SharedCode } from "@/types/playground"
import { create } from "zustand"


type State = {
  shared_code: SharedCode | null
  setSharedCode: (code: SharedCode) => void
}

export const useSharedCode = create<State>((set) => ({
  shared_code: null,
  setSharedCode: (code) => set({ shared_code: code })
}))