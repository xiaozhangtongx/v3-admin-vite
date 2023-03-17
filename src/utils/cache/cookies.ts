/** 统一处理 Cookie */

import Cookies from 'js-cookie'
import CacheKey from '@/constants/cacheKey'

export const getToken = () => {
  return Cookies.get(CacheKey.TOKEN)
}
export const setToken = (token: string) => {
  Cookies.set(CacheKey.TOKEN, token)
}
export const removeToken = () => {
  Cookies.remove(CacheKey.TOKEN)
}
