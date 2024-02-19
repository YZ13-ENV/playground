export type SharedCode = {
  html: string
  css: string
  js: string
  createdAt: number
  updatedAt?: number
  expiredAt: number
}
export type SharedScratchCode = {
  html: string
  css: string
  js: string
}
export type DocSharedCode = { doc_id: string } & SharedCode