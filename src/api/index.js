import request from '@/utils/request'

export const getUsers = () => request({
  url: '/api/mall/categorys',
  method: 'get'
})
