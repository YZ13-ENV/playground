'use client'
import { playground } from "@/api/playground";
import { useCSS } from "@/components/entities/code/css";
import { useHTML } from "@/components/entities/code/html";
import { useJS } from "@/components/entities/code/js";
import { api_host } from "@/const/host";
import { cn } from "@/lib/utils";
import { DocSharedCode } from "@/types/playground";
import { useDebounceEffect } from "ahooks";
import { isEqual } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import { MdOutlineCloud, MdOutlineCloudDone, MdOutlineCloudOff } from "react-icons/md";
import { io } from 'socket.io-client';

type Props = {
  shared_code: DocSharedCode
}
const SharedCodeWatcher = ({ shared_code }: Props) => {
  const [originalSharedCode, setSharedCode] = useState<DocSharedCode>(shared_code)
  const [debouncedSharedCode, setDebouncedSharedCode] = useState<DocSharedCode>(shared_code)
  const [loading, setLoading] = useState<boolean>(false)
  const [connected, setConnected] = useState<boolean>(false)
  const synced = useMemo(() => { return isEqual(originalSharedCode, debouncedSharedCode) }, [originalSharedCode, debouncedSharedCode])
  const js_code = useJS(state => state.js_code)
  const html_code = useHTML(state => state.html_code)
  const css_code = useCSS(state => state.css_code)
  const setJs = useJS(state => state.setJsCode)
  const setHtml = useHTML(state => state.setHtmlCode)
  const setCss = useCSS(state => state.setCssCode)
  const updateSharedCode = async (id: string, code: DocSharedCode) => {
    const partialCode = code as Partial<DocSharedCode>
    delete partialCode.doc_id
    return await playground.update(id, partialCode)
  }
  useEffect(() => {
    const socket = io(api_host)
    socket.on('connect', () => {
      setConnected(true)
      console.log('Connected to playground');
      socket.emit('playground', shared_code.doc_id);
    });
    socket.on('playground', (data: DocSharedCode) => {
      console.log(data)
      if (data) {
        setSharedCode(data)
        setDebouncedSharedCode(data)
        const { js, css, html } = data
        setJs(js)
        setHtml(html)
        setCss(css)
      }
    })
    socket.on('exception', (data) => {
      console.log('event', data);
    });
    socket.on('disconnect', () => {
      setConnected(false)
      console.log('Disconnected');
    });
    return () => {
      socket.close()
    }
  }, [shared_code.doc_id])
  useDebounceEffect(() => {
    if (!isEqual(originalSharedCode, debouncedSharedCode)) {
      setLoading(false)
      updateSharedCode(shared_code.doc_id, originalSharedCode)
        .finally(() => setLoading(false))
    }
  }, [originalSharedCode, debouncedSharedCode], { wait: 1000, maxWait: 2000 })
  useEffect(() => {
    const { js, css, html } = shared_code
    setJs(js)
    setHtml(html)
    setCss(css)
  }, [])
  useEffect(() => {
    setSharedCode({
      ...originalSharedCode,
      html: html_code,
      css: css_code,
      js: js_code
    })
  }, [html_code, css_code, js_code])
  const icon_size = 20
  return (
    <div className="h-9 aspect-square flex items-center justify-center relative">
      <LuDot className={cn(connected ? "text-green-600" : "text-red-600", "absolute -top-1 -right-1")} size={24} />
      {loading && <BiLoaderAlt size={icon_size} className="absolute z-10 animate-spin" />}
      {
        !connected
          ? <MdOutlineCloudOff className={loading ? 'scale-75 text-muted-foreground' : ""} size={icon_size} />
          : synced
            ? <MdOutlineCloudDone className={loading ? 'scale-75 text-muted-foreground' : ""} size={icon_size} />
            : <MdOutlineCloud className={loading ? 'scale-75 text-muted-foreground' : ""} size={icon_size} />
      }
    </div>
  )
}

export default SharedCodeWatcher