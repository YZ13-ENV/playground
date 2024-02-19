import { playground } from "@/api/playground"
import EditorWrapper from "@/app/_components/editor-wrapper"
import CodeRender from "@/components/shared/code-render"
import DynamicWrapper from "@/components/shared/dynamic-wrapper"
import { ResizablePanel } from "@/components/ui/resizable"
import Header from "@/components/widgets/header"
import SharedCodeWatcher from "../../_components/shared-code-watcher"


type Props = {
  params: {
    id: string
  }
}
const page = async({ params }: Props) => {
  const { id } = params
  const shared_code = await playground.get(id)
  return (
    <>
      <Header>
        { shared_code && <SharedCodeWatcher shared_code={shared_code} /> }
      </Header>
      <DynamicWrapper>
        <EditorWrapper id={id} />
        <ResizablePanel order={2} defaultSize={50}>
          <CodeRender />
        </ResizablePanel>
      </DynamicWrapper>
    </>
  )
}

export default page