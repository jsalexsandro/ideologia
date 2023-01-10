import { createContext } from "react";
import axios from "axios"
import { setCookie } from "nookies"

type signInPropertiesType = {
  email: string
  password: string
}

export type User = {
  name: string
  email: string
  username: string
  level: string
  bio:string
  avatarUrl: string
  courses: string
}

type ResponseApiType = {
  error?: string
  type?: string
  success?: boolean
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (props: signInPropertiesType) => Promise<ResponseApiType>;
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }){
  const isAuthenticated = false

  async function signIn({ email, password }: signInPropertiesType ) {
    try {
      const response = await axios.post("/api/auth/signIn", { email: email, password: password })
      const token = response.headers['token']

      setCookie(null, "next-token", token, {
        path:"/",
        maxAge:259200
      })

      return response.data

    } catch (error) {
      return {
        ...error.response.data
      }
    }

  }

  return (
    <AuthContext.Provider value = {{ isAuthenticated, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}