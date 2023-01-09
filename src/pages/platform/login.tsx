import { Link } from "@mui/material";
import { LockKey } from "phosphor-react";
import { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";
import { AuthContext } from "../../context/AuthContext";


export default function Login(){
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(e: any){
    e.preventDefault();
    const email = e.target.email.value as string
    const password = e.target.password.value as string
    const checkbox = e.target.checkbox.checked as boolean

    const data = await signIn({ email, password })
    if (!data.success) {
      toast.error(data.error, {
        style: {
          color: "black"
        }
      })
    } else {
      location.assign("/platform")
    }
  }

  return (
    <>
    <img className="sm:hidden absolute top-0 w-full h-[100%]" src="/background.png" />
    <main className="bg-neutral-200 w-full h-[100vh] flex items-center ">
      <div className="max-sm:hidden">
       <img className="w-[calc(100vw_-_500px)] h-[100vh]" src="/background.png" />
      </div>
      <div className="w-[500px] h-[100vh] flex items-center flex-col">
        <div className="absolute top-[40%] translate-y-[-40%]">
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full">
              <LockKey size={32} className="text-neutral-100" />
            </span>
            <h1 className="text-blue-500 max-sm:text-zinc-200 font-medium text-3xl pb-4">
              Login
            </h1>
          </div>
          <form onSubmit={ handleSignIn } action="#" className="flex gap-2 flex-col">
            <InputEmail id="email" placeholder="Email"/>
            <InputPassword id="password" placeholder="Senha" />
            <CheckBox id="checkbox"  label="Mantenha me Conectado" />
            <Button style={{ backgroundColor:"rgb(59, 130, 246)", height:"48px" }} type="submit">
              <p className="text-neutral-100">
                Login
              </p>
            </Button>
          <Link className="text-center py-1 max-sm:text-white">
            <p>
              Ainda não sou aluno?
            </p>
          </Link>
          </form>
        </div>
        <Toaster
          position="bottom-center"
          reverseOrder={true}
        />
      </div>
    </main>
    </>
  )
}