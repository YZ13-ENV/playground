'use client'
import { tabs, useTab } from "@/components/entities/wrapper-tabs"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


const LayoutTabs = () => {
  const active_tab = useTab(state => state.tab)
  const setTab = useTab(state => state.setTab)
  return (
    <Tabs value={active_tab} onValueChange={setTab}>
      <TabsList>
        {
          tabs.map(tab => {
            return (
              <TabsTrigger key={tab.value} value={tab.value} className="h-full px-2">
                { tab.icon && tab.icon }
              </TabsTrigger>
            )
          })
        }
      </TabsList>
    </Tabs>
  )
}

export default LayoutTabs