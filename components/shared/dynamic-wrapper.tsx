'use client'

import { cn } from "@/lib/utils"
import { useTab } from "../entities/wrapper-tabs"
import { ReactNode } from "react"
import { ResizablePanelGroup } from "../ui/resizable"

type Props = {
  children?: ReactNode
}
const DynamicWrapper = ({ children }: Props) => {
  const active_tab = useTab(state => state.tab)
  const validTab = active_tab as 'horizontal' | 'vertical'
  return (
    <div style={{ height: 'calc(100dvh - 56px)' }} className={cn(
      active_tab === 'horizontal' ? "flex-row" : active_tab === 'vertical' ? "flex-col" : 'flex-row',
      "w-full flex"
    )}>
      <ResizablePanelGroup direction={validTab}>
        { children }
      </ResizablePanelGroup>
    </div>
  )
}

export default DynamicWrapper