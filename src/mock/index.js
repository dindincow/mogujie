import Mock from 'mockjs'
Mock.setup({
  timeout: '300 - 600'
})

Mock.mock('api/user', 'get', getUser)

function getUser () {
  return Mock.mock({
    data: {
      date: {
        name: '@name',
        'phome|11': '@integer(0,9)'
      },
      status: '200',
      msg: '請求成功'
    }
  })
}
export default Mock
