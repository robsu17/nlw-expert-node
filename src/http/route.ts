import { FastifyInstance } from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";

export async function route(app: FastifyInstance) {
  app.post('/polls', createPoll)
  app.get('/polls/:pollId', getPoll)
  app.post('/polls/:pollId/votes', voteOnPoll)
}