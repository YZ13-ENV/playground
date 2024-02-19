import CodeRender from "@/components/shared/code-render";
import DynamicWrapper from "@/components/shared/dynamic-wrapper";
import { ResizablePanel } from "@/components/ui/resizable";
import Header from "@/components/widgets/header";
import EditorWrapper from "./_components/editor-wrapper";

export default function Home() {
  return (
    <>
      <Header />
      <DynamicWrapper>
        <EditorWrapper />
        <ResizablePanel order={2} defaultSize={50}>
          <CodeRender />
        </ResizablePanel>
      </DynamicWrapper>
    </>
  );
}
