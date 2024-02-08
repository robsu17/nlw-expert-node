import { randomUUID } from "crypto"
import { FastifyReply, FastifyRequest } from "fastify"
import z from "zod"
import { prisma } from "../../lib/prisma"

export async function voteOnPoll(request: FastifyRequest, reply: FastifyReply) {

  const voteOnPollBody = z.object({
    pollOptionId: z.string().uuid(),
  })

  const voteOnPollParams = z.object({
    pollId: z.string().uuid()
  })

  const { pollOptionId } = voteOnPollBody.parse(request.body)
  const { pollId } = voteOnPollParams.parse(request.params)

  let { sessionId } = request.cookies

  if (sessionId) {
    const userPreviousVoteOnPoll = await prisma.vote.findUnique({
      where: {
        sessionId_pollId: {
          pollId,
          sessionId
        }
      }
    })

    if (userPreviousVoteOnPoll) {
      return reply.status(401).send({ message: 'Usuário já votou nessa enquete' })
    }
  }

  if (!sessionId) {
    sessionId = randomUUID()

    reply.setCookie('sessionId', sessionId, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days,
      signed: true, // Não poderá ser editado pelo usuário no front-end
      httpOnly: true // Só poderá ser acessível pelo servidor back-end
    })
  }

  const vote = await prisma.vote.create({
    data: {
      sessionId,
      pollId,
      pollOptionId
    }
  })

  return reply.status(201).send(vote)
}