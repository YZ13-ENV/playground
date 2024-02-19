'use client'

import { useCSS } from "../entities/code/css"
import { useHTML } from "../entities/code/html"
import { useJS } from "../entities/code/js"

const CodeRender = () => {
  const js_code = useJS(state => state.js_code)
  const html_code = useHTML(state => state.html_code)
  const css_code = useCSS(state => state.css_code)
  const document_code = `
    <html>
      <head>
        <meta charset=&quot;utf-8&quot;>
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;>
        <script script src="https://cdn.tailwindcss.com"></script>
        <script>tailwind.config = {darkMode: "class"}</script>
        <style>${css_code}</style>
      </head>
      <body class='dark'>
        ${html_code}
        <script>${js_code}</script>
      </body>
    </html>
  `;
  // const iframe_code = `data:text/html;charset=utf-8,${encodeURIComponent(document_code)}`;
  return <iframe
    sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals"
    className="w-full h-full bg-primary"
    srcDoc={document_code}
  />
}

export default CodeRender