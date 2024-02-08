import { FastifyReply, FastifyRequest } from "fastify"
import z from "zod"
import { prisma } from "../../lib/prisma"

export async function getPoll(request: FastifyRequest, reply: FastifyReply) {

  const getPoll = z.object({
    pollId: z.string().uuid(),
  })

  const { pollId } = getPoll.parse(request.params)

  const poll = await prisma.poll.findUnique({
    where: {
      id: pollId
    },
    include: {
      options:{
        select: {
          id: true,
          title: true
        }
      }
    }
  })

  return reply.send({ poll })
}