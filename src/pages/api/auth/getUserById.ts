import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()


export default async function getUserById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
   return res.status(404).send("404 not found");
  }

  const { id } = req.body;

  if (!id){
    res.status(422).send({ error:"O id é obrigatorio", type: "id-mandatory" })
  }
 

  
  const user = await prisma.user.findUnique({ 
    where: { id },
    select: {
      email:true,
      level:true,
      username:true,
      name:true,
      bio:true,
      avatarUrl:true
    }
  })

  if (!user){
    res.status(422).send({ error:"Este id não é valido", type: "id-not-exist" })
  }

  return res.json({ ...user })
} 