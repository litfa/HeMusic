import request from '@/utils/request'

export const url = (id: string | number) => request({
  url: '/song/url',
  params: {
    id
  }
})