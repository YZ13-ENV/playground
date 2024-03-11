'use client'
import { css } from "@codemirror/lang-css"
import { html } from "@codemirror/lang-html"
import { javascript } from "@codemirror/lang-javascript"
import { LanguageName, loadLanguage } from "@uiw/codemirror-extensions-langs"
import { githubDarkInit } from "@uiw/codemirror-theme-github"
import ReactCodeMirror, { Statistics } from "@uiw/react-codemirror"

type Props = {
  lang?: LanguageName
  value?: string
  onValueChange?: (value: string) => void
  onStatistics?: (data: Statistics) => void
}
const CodeInput = ({
  onStatistics,
  lang = 'html',
  onValueChange,
  value
}: Props) => {
  return (
    <ReactCodeMirror
      className="!editor-font"
      autoFocus
      indentWithTab
      onStatistics={onStatistics}
      width="100%"
      minHeight="inherit"
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