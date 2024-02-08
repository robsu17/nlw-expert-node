import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { route } from './route'

const app = fastify()

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
})

app.register(route)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP SERVER RUNNING ON PORT 3333')
})