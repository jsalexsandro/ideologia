import { GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"
import { User } from "../../context/AuthContext";
import { Fragment } from "react";
import { PlatformNavbar } from "../../components/PlatformNavbar";

import jwt from "jsonwebtoken"
import axios from "axios";

export default function Index({ name, avatarUrl  }) {
  return (
    <Fragment>
      <PlatformNavbar name={name} avatarUrl={ avatarUrl } />
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

  let response;
  let user:User;
  try {
    response = await axios.post(`${process.env.URL}/api/auth/getUserById`, { id:id })
    user = await response.data
  } catch (e) {
    return {
      redirect:{
        destination:"/platform/login"
      },
      props:{}
    }
  }


  return {
    props:{
      ...user
    }
  }
}