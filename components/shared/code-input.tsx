'use client'
import { githubDarkInit } from "@uiw/codemirror-theme-github"
import ReactCodeMirror, { Statistics } from "@uiw/react-codemirror"
import { LanguageName, loadLanguage } from "@uiw/codemirror-extensions-langs"
import { javascript } from "@codemirror/lang-javascript"
import { css } from "@codemirror/lang-css"
import { html } from "@codemirror/lang-html"

type Props = {
  lang?: LanguageName
  value?: string
  onValueChange?: (value: string) => void
  onStatistics?: (data: Statistics) => void
}
const CodeInput = ({
  onStatistics,
  lang='html',
  onValueChange,
  value
}: Props) => {
  return (
    <ReactCodeMirror
      autoFocus
      indentWithTab
      onStatistics={onStatistics}
      minHeight="24rem"
      value={value || ''}
      onChange={code => onValueChange && onValueChange(code)}
      theme={githubDarkInit({
        settings: {
          background: "#000",
          gutterBackground: "#000",
          gutterBorder: "#111"
        }
      })}
      placeholder={"Начните писать код..."}
      extensions={[
        loadLanguage(lang)!,
        javascript(),
        html({ autoCloseTags: true, matchClosingTags: true, selfClosingTags: true }),
        css()
      ]}
    />
  )
}

export default CodeInput