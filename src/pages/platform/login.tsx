import { Link } from "@mui/material";
import { LockKey } from "phosphor-react";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";



export default function Login(){

  async function handleSignIn(e: any){
    e.preventDefault();
    const email = e.target.email.value as string
    const password = e.target.password.value as string
    const checkbox = e.target.checkbox.checked as boolean

    console.log({ email, password, checkbox })
   
  }

  return (
    <main className="bg-neutral-200 w-full h-[100vh] flex items-center ">
      <div className="max-sm:hidden">
       <img className="w-[calc(100vw_-_500px)] h-[100vh]" src="/ideologia.jpg" />
      </div>
      <div className="w-[500px] h-[100vh] flex items-center flex-col">
        <div className="absolute top-[30%] translate-y-[-30%]">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full">
              <LockKey size={32} className="text-neutral-100" />
            </span>
            <h1 className="text-blue-500 font-medium text-3xl pb-4">
              Login
            </h1>
          </div>
          <form onSubmit={ handleSignIn } action="#" className="flex gap-1 flex-col">
            <InputEmail id="email" placeholder="Email"/>
            <InputPassword id="password" placeholder="Senha" />
            <CheckBox id="checkbox"  label="Mantenha me Conectado" />
            <Button style={{ backgroundColor:"rgb(59, 130, 246)", height:"48px" }} type="submit">
              <p className="text-neutral-100">
                Login
              </p>
            </Button>
          <Link className="text-center">
            <p>
              Ainda não sou aluno?
            </p>
          </Link>
          </form>
        </div>
      </div>
    </main>
  )
}