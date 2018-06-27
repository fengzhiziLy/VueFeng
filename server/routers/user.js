const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'feng' && user.password === '123456') {
    ctx.session.user = {
      username: 'feng'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'feng'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
