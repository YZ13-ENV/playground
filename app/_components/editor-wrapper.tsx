import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable"
import CodeEditor from "@/components/widgets/code-editor"
import EditorTabs from "./editor-tabs"
import ShareButton from "./share-button"

type Props = {
  id?: string
}
const EditorWrapper = ({ id }: Props) => {
  return (
    <>
      <ResizablePanel
        order={1}
        defaultSize={50}
      >
        <div className="w-full h-full flex-col">
          <div className="w-full h-10 shrink flex items-center justify-between border-b">
            <EditorTabs />
            <div className="px-1"><ShareButton id={id} /></div>
          </div>
          <CodeEditor />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
    </>
  )
}

export default EditorWrapper