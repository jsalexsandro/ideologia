import { Link } from "@mui/material";
import { LockKey } from "phosphor-react";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";


export default function Login(){
  return (
    <main className="bg-neutral-200 w-full h-[100vh]">
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%]">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full">
            <LockKey size={32} className="text-neutral-100" />
          </span>
          <h1 className="text-blue-500 font-medium text-3xl pb-4">
            Login
          </h1>
        </div>
        <form action="#" className="flex gap-1 flex-col">
          <InputEmail placeholder="Email"/>
          <InputPassword placeholder="Senha" />
          <CheckBox id="checkbox-login"  label="Mantenha me Conectado" />
          <Button className="bg-blue-500 w-[320px] h-14 mt-4 hover:bg-blue-600 transition-colors" type="submit">
            <p className="text-xl font-medium text-neutral-100">
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
    </main>
  )
}