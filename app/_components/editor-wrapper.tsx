'use client'

import { useTab } from "@/components/entities/wrapper-tabs"
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable"
import CodeEditor from "@/components/widgets/code-editor"
import EditorTabs from "./editor-tabs"

const EditorWrapper = () => {
  const active_tab = useTab(state => state.tab)
  return (
    <>
      <ResizablePanel
        order={1}
        defaultSize={50}
      >
        <div className="w-full h-full flex-col">
          <div className="w-full h-10 shrink border-b"><EditorTabs /></div>
          <CodeEditor />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
    </>
  )
}

export default EditorWrapper