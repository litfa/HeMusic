import request from '@/utils/request'

export const newsong = () => request({
  url: '/personalized/newsong'
})