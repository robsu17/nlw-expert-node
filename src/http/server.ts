import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { route } from './route'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
  secret: 'polls-app-nlw',
  hook: 'onRequest',
})

app.register(websocket)

app.register(pollResults)
app.register(route)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP SERVER RUNNING ON PORT 3333')
})