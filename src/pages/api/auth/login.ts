import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default async function loginApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
   return res.status(404).send("404 not found");
  }

  const { email, password }  = req.body

  if (!email){
    res.status(422).send({ error:"The email is mandatory", type: "email-mandatory" })
  }
  if (!password){
    res.status(422).send({ error:"The password is mandatory", type: "password-mandatory" })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user){
    return res.status(422).json({ error:"Email not exist in platoform", type:"email-not-exist" })
  }

  if (password != user.password) {
    res.status(422).json({ error:"Email address or password not valid", type:"invalid-password" })
  }

  const userFrontEnd = {
    name: user.name,
    username: user.username,
    email: user.email,
    level: user.level,
    id: user.id
  }

  const token = jwt.sign(userFrontEnd, process.env.SECRET_KEY)


  return res.status(200).json({ token })
} 