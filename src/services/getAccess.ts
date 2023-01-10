import axios from "axios";
import JsonWebTokenError from "jsonwebtoken";
import { parseCookies } from "nookies";
import { User } from "../context/AuthContext";

export async function getAccess(context= null, path:string){
  const token = parseCookies(context)["next-token"]
  let contentToken;
  try {
    contentToken = JsonWebTokenError.verify(token, process.env.SECRET_KEY)

  } catch (e) {
    return {
      redirect:{
        destination:"/platform/login"
      },
      props:{}
    }
  }

  const { id, power }  = contentToken 

  if (path == "dashboard"){
    if ( power != "director" ){
      return {
        redirect:{
          destination:"/platform/"
        },
        props:{
          permited: false
        }
      }
    }
  }

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
      ...user, power, permited:true
    }
  }
}