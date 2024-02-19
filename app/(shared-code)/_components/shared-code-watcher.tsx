'use client'
import { MdOutlineCloud, MdOutlineCloudDone } from "react-icons/md";
import { playground } from "@/api/playground"
import { useCSS } from "@/components/entities/code/css"
import { useHTML } from "@/components/entities/code/html"
import { useJS } from "@/components/entities/code/js"
import { DocSharedCode, SharedCode } from "@/types/playground"
import { useDebounceEffect } from "ahooks"
import { eq, isEqual } from "lodash"
import { useEffect, useMemo, useState } from "react"
import { BiLoaderAlt } from "react-icons/bi";

type Props = {
  shared_code: DocSharedCode
}
const SharedCodeWatcher = ({ shared_code }: Props) => {
  const [originalSharedCode, setSharedCode] = useState<DocSharedCode>(shared_code)
  const [debouncedSharedCode, setDebouncedSharedCode] = useState<DocSharedCode>(shared_code)
  const [loading, setLoading] = useState<boolean>(false)
  const synced = useMemo(() => { return isEqual(originalSharedCode, debouncedSharedCode) }, [originalSharedCode, debouncedSharedCode])
  const js_code = useJS(state => state.js_code)
  const html_code = useHTML(state => state.html_code)
  const css_code = useCSS(state => state.css_code)
  const setJs = useJS(state => state.setJsCode)
  const setHtml = useHTML(state => state.setHtmlCode)
  const setCss = useCSS(state => state.setCssCode)
  const updateSharedCode = async(id: string, code: DocSharedCode) => {
    const partialCode = code as Partial<DocSharedCode>
    delete partialCode.doc_id
    return await playground.update(id, partialCode)
  }
  useDebounceEffect(() => {
    if (!isEqual(originalSharedCode, debouncedSharedCode)) {
      setLoading(true)
      updateSharedCode(shared_code.doc_id, originalSharedCode)
      .then(result => {
        if (result) {
          setDebouncedSharedCode(result)
          setSharedCode(result)
          const { js, css, html } = result
          setJs(js)
          setHtml(html)
          setCss(css)
        }
        return null
      })
      .finally(() => setLoading(false))
    }
  },[originalSharedCode, debouncedSharedCode], { wait: 1000, maxWait: 2000 })
  useEffect(() => {
    const { js, css, html } = shared_code
    setJs(js)
    setHtml(html)
    setCss(css)
  },[])
  useEffect(() => {
    setSharedCode({
      ...originalSharedCode,
      html: html_code,
      css: css_code,
      js: js_code
    })
  },[html_code, css_code, js_code])
  const icon_size = 20
  return (
    <div className="h-9 aspect-square flex items-center justify-center relative">
      { loading && <BiLoaderAlt size={icon_size} className="absolute z-10 animate-spin" /> }
      { synced
        ? <MdOutlineCloudDone className={loading ? 'scale-75 text-muted-foreground' : ""} size={icon_size} />
        : <MdOutlineCloud className={loading ? 'scale-75 text-muted-foreground' : ""} size={icon_size} />
      }
    </div>
  )
}

export default SharedCodeWatcher