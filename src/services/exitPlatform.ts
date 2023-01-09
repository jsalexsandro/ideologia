import { setCookie } from "nookies";

export function ExitPlatform(context:any){
  setCookie(context, "next-token", "", {
    path:"/",
    maxAge: 1000
  })
}