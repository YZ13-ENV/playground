'use client'
import CodeMirror from '@uiw/react-codemirror';
import { githubDarkInit } from '@uiw/codemirror-theme-github'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { useJS } from '@/components/entities/code/js';
import { useHTML } from '@/components/entities/code/html';
import { useCSS } from '@/components/entities/code/css';
import { useEditorTab } from '@/components/entities/editor-tabs';
import { LanguageName, loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDebounceFn } from 'ahooks'

const CodeEditor = () => {
  const tab = useEditorTab(state => state.tab)
  const js_code = useJS(state => state.js_code)
  const html_code = useHTML(state => state.html_code)
  const css_code = useCSS(state => state.css_code)
  const setJs = useJS(state => state.setJsCode)
  const setHtml = useHTML(state => state.setHtmlCode)
  const setCss = useCSS(state => state.setCssCode)
  const getCode = (tab: string) => {
    if (tab === 'html') return html_code
    if (tab === 'css') return css_code
    if (tab === 'js') return js_code
    return ''
  }
  const updateCode = useDebounceFn((code: string, tab: string) => {
    if (tab === 'html') setHtml(code)
    if (tab === 'css') setCss(code)
    if (tab === 'javascript') setJs(code)
  }, { wait: 1000, maxWait: 2000 })
  return (
    <CodeMirror
      autoFocus
      indentWithTab
      className='text-sm'
      onStatistics={data => data}
      height='calc(100dvh - 64px)'
      value={getCode(tab)}
      onChange={code => updateCode.run(code, tab)}
      theme={githubDarkInit({
        settings: {
          background: "#000",
          gutterBackground: "#000",
          gutterBorder: "#111"
        }
      })}
      placeholder={"Начните писать код..."}
      extensions={[
        loadLanguage(tab as LanguageName)!,
        javascript(),
        html({ autoCloseTags: true, matchClosingTags: true, selfClosingTags: true }),
        css()
      ]}
    />
  )
}

export default CodeEditor