import request from '@/utils/request'

export default (keywords: string) => request({
  url: '/cloudsearch',
  params: { keywords }
})

export const defaultSuggest = () => request({
  url: '/search/default'
})

export const suggest = (keywords: string) => request({
  url: '/search/suggest',
  params: { keywords }
})