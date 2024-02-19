import Image from "next/image"
import Tabs from "./tabs"

const Header = () => {
  return (
    <header className="w-full h-14 shrink-0 border-b px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src='/wecode-dark.svg' width={28} height={28} alt="app-logo" />
        <span className="text-2xl text-muted">\</span>
        <span className="text-xl font-bold">Weecode</span>
        <span className="text-xl font-bold text-muted-foreground">Play</span>
      </div>
      <div className="flex items-center gap-2 h-full">
        <Tabs />
      </div>
    </header>
  )
}

export default Header