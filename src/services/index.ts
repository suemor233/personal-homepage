import type { AxiosInstance } from 'axios'
import { version } from 'react'
import { allControllers, createClient } from '@mx-space/api-client'
import { axiosAdaptor } from '@mx-space/api-client/dist/adaptors/axios'
import PKG from '../../package.json'
const genUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const apiClient = createClient(axiosAdaptor)("https://server.suemor.com/api/v2", {
  controllers: allControllers,
})

const uuid = genUUID()

export const $axios = axiosAdaptor.default as AxiosInstance

$axios.defaults.timeout = 10000

$axios.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['x-uuid'] = uuid
    config.headers['User-Agent'] = `NextJS/v${PKG.dependencies.next} homepage/${version}`
  }

  return config
})
