import Image from "next/image";
import { VscSplitHorizontal, VscSplitVertical } from "react-icons/vsc";

export default function Home() {
  return (
    <>
      <header className="w-full h-14 shrink-0 border-b px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src='/wecode-dark.svg' width={32} height={32} alt="app-logo" />
          <span className="text-2xl text-muted">\</span>
          <span className="text-2xl font-bold">Weecode</span>
          <span className="text-2xl font-bold text-muted-foreground">Play</span>
        </div>
        <div className="flex items-center gap-2 h-full">
          <div className="p-2 h-9 w-fit flex items-center gap-2 rounded-md bg-muted">
            <div className="h-full aspect-square flex items-center justify-center text-muted-foreground">
              <VscSplitHorizontal />
            </div>
            <div className="h-full aspect-square flex items-center justify-center text-muted-foreground">
              <VscSplitVertical />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
