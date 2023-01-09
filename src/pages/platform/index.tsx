import { GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"
import { User } from "../../context/AuthContext";
import { Fragment } from "react";
import { PlatformNavbar } from "../../components/PlatformNavbar";

import jwt from "jsonwebtoken"
import axios from "axios";

export default function Index({ name }) {
  return (
    <Fragment>
      <PlatformNavbar name={name} />
    </Fragment>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext){
  const token = parseCookies(context)["next-token"]
  let contentToken;
  try {
    contentToken = jwt.verify(token, process.env.SECRET_KEY)

  } catch (e) {
    return {
      redirect:{
        destination:"/platform/login"
      },
      props:{}
    }
  }

  const { id, power }  = contentToken 

  const response = await axios.post(`${process.env.URL}/api/auth/getUserById`, { id:id })
  const user:User = await response.data

  return {
    props:{
      ...user
    }
  }
}