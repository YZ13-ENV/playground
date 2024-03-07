'use client'
import { playground } from "@/api/playground"
import { useCSS } from "@/components/entities/code/css"
import { useHTML } from "@/components/entities/code/html"
import { useJS } from "@/components/entities/code/js"
import { Button } from "@/components/ui/button"
import { default_code } from "@/const/default-code"
import { SharedScratchCode } from "@/types/playground"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { BiLoaderAlt } from 'react-icons/bi'

type Props = {
  id?: string
}
const ShareButton = ({ id }: Props) => {
  const js_code = useJS(state => state.js_code)
  const html_code = useHTML(state => state.html_code)
  const css_code = useCSS(state => state.css_code)
  const setJs = useJS(state => state.setJsCode)
  const setHtml = useHTML(state => state.setHtmlCode)
  const setCss = useCSS(state => state.setCssCode)
  //
  const prefix = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://play.darkmaterial.space"
  const link = id ? prefix + `/${id}` : null
  const { push, prefetch } = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const shareCode = async () => {
    setLoading(true)
    const code_to_share: SharedScratchCode = {
      html: html_code,
      css: css_code,
      js: js_code
    }
    const uploaded = await playground.create(code_to_share)
    if (uploaded && uploaded.doc_id) {
      const uploaded_link = prefix + `/${uploaded.doc_id}`
      prefetch(uploaded_link)
      push(uploaded_link)
    }
  }
  const kdForCopy = () => {
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 2000);
  }
  const copyLink = () => {
    if (link) {
      navigator.clipboard.writeText(link)
      kdForCopy()
    }
  }
  useEffect(() => {
    if (!id) {
      setHtml(default_code)
      setCss(default_code)
    }
  }, [id])
  if (link) return <Button variant='outline' onClick={copyLink} disabled={disabled || loading} size='sm'>Скопировать</Button>
  return (
    <Button onClick={shareCode} disabled={disabled || loading} size='sm' className="gap-2">
      {loading && <BiLoaderAlt className="animate-spin" size={16} />}
      Поделиться
    </Button>
  )
}

export default ShareButton