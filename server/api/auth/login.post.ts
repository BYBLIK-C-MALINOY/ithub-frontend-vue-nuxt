import { auth } from "~~/server/utils/auth"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await auth.api.signInEmail({
    body
  })

  return result
})