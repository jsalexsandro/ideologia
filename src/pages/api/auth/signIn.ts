import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"
import { comparePassword } from "../../../services/password"

const prisma = new PrismaClient()

export default async function loginApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
   return res.status(404).send("404 not found");
  }

  const { email, password }  = req.body

  if (!email){
    res.status(422).send({ error:"O Email é obrigatorio", type: "email-mandatory" })
  }
  if (!password){
    res.status(422).send({ error:"A senha é obrigatoria", type: "password-mandatory" })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user){
    return res.status(422).json({ error:"O endereço de email cadastrado não existe na plataforma", type:"email-not-exist" })
  }

  const equal = await comparePassword(password, user.password) // password, hash password// password)
  if (!equal) {
    return res.status(422).json({ error:"Email ou senha invalída", type:"invalid-password" })
  }

  const userFrontEnd = { // response user id
    id: user.id,
    power:user.type
  }

  const token = jwt.sign(userFrontEnd, process.env.SECRET_KEY)
  res.setHeader("token", token)
  return res.status(200).json({ success:true })
} 