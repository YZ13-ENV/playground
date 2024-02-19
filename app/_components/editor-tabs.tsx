'use client'
import { motion } from 'framer-motion'
import { tabs, useEditorTab } from "@/components/entities/editor-tabs"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const EditorTabs = () => {
  const tab = useEditorTab(state => state.tab)
  const setTab = useEditorTab(state => state.setTab)
  return (
    <Tabs className="h-full" value={tab} onValueChange={value => setTab(value)}>
      <TabsList className="h-full bg-transparent">
        {
          tabs.map(
            tab_data =>
            <TabsTrigger
              key={tab_data.value}
              value={tab_data.value}
              className="gap-2 relative"
            >
              { tab_data.icon && tab_data.icon }
              { tab_data.label }
              {
                tab_data.value === tab &&
                <motion.div layoutId='active-tab' className='w-full h-0.5 bg-accent-foreground absolute -bottom-1' />
              }
            </TabsTrigger>
          )
        }
      </TabsList>
    </Tabs>
  )
}

export default EditorTabs