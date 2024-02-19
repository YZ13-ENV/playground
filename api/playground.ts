import { authorizationHeader } from 'api'
import { DocSharedCode, SharedCode, SharedScratchCode } from "@/types/playground";
import { api_host } from '@/const/host';

const api_prefix = `${api_host}/playground`
export const playground = {
  get: async(id: string) => {
    try {
      const headers = new Headers()
      const authHeader = authorizationHeader()
      headers.append('authorizations', authHeader || '')
      const url = `${api_prefix}/shared/${id}`
      const res = await fetch(url, { method: "GET", headers: headers })
      if (res.ok) return await res.json() as DocSharedCode
      return null
    } catch (e) {
      return null
    }
  },
  create: async(scratch: SharedScratchCode) => {
    try {
      const headers = new Headers()
      const authHeader = authorizationHeader()
      headers.append('authorizations', authHeader || '')
      headers.append('Content-Type', 'application/json')
      const url = `${api_prefix}/share`
      const res = await fetch(url, { method: "POST", headers: headers, body: JSON.stringify(scratch) })
      if (res.ok) return await res.json() as DocSharedCode
      return null
    } catch (e) {
      return null
    }
  },
  update: async(id: string, scratch: Partial<SharedCode>) => {
    try {
      const headers = new Headers()
      const authHeader = authorizationHeader()
      headers.append('authorizations', authHeader || '')
      headers.append('Content-Type', 'application/json')
      const url = `${api_prefix}/shared/${id}`
      const res = await fetch(url, { method: "PATCH", headers: headers, body: JSON.stringify(scratch) })
      if (res.ok) return await res.json() as DocSharedCode
      return null
    } catch (e) {
      return null
    }
  },
  delete: async(id: string) => {
    try {
      const headers = new Headers()
      const authHeader = authorizationHeader()
      headers.append('authorizations', authHeader || '')
      const url = `${api_prefix}/shared/${id}`
      const res = await fetch(url, { method: "DELETE", headers: headers })
      if (res.ok) return Boolean(await res.text())
      return false
    } catch (e) {
      return false
    }
  }
}