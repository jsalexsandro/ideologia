import { Fragment, useState, useRef, useEffect, FormEvent, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import { Eye, EyeSlash } from "phosphor-react";
import { toast, Toaster } from "react-hot-toast";


export default function Login(){
  const [ visiblePassword, setVisiblePassword ] = useState(false)
  const inputPasswordRef = useRef<HTMLInputElement | null>(null)
  const inputEmailRef = useRef<HTMLInputElement | null>(null)
  const divPasswordRef = useRef<HTMLDivElement | null>(null)

  const loginContext = useContext(AuthContext)

  function handleVisiblePassword(){
    if ( !visiblePassword ) {
      inputPasswordRef.current.type = "text"
    } else {
      inputPasswordRef.current.type = "password"
    }
    
    setVisiblePassword(!visiblePassword)
  }

  useEffect(() => {
    inputPasswordRef.current.addEventListener("focus", () => {
      divPasswordRef.current.classList.remove("border-zinc-400")
      divPasswordRef.current.classList.add("border-zinc-600")
      divPasswordRef.current.classList.add("shadow-[0_0_2px_rgb(161,161,170)]")
    })

    inputPasswordRef.current.addEventListener("blur", () => {
      divPasswordRef.current.classList.remove("border-zinc-600")
      divPasswordRef.current.classList.remove("shadow-[0_0_2px_rgb(161,161,170)]")
      divPasswordRef.current.classList.add("border-zinc-400")
    })
  }, [])


  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    let email = "";
    let password = "";

    if (inputEmailRef.current && inputEmailRef.current.value.length > 0) {
      email = inputEmailRef.current.value
    }
    if (inputPasswordRef.current && inputPasswordRef.current.value.length > 0) {
      password = inputPasswordRef.current.value
    }
     
    const response = await loginContext.signIn({ email, password })
    if (!response.success){
      toast.error(response.error, {
        position: "bottom-center"
      })
    } else {
      location.assign("/platform")
    }
    
  }

  return (
    <Fragment>
      <div className="w-full h-[100vh]">
        <nav className="ml-2 py-4 bg-transparent ">
          <div className="flex items-center bg-transparent">
            <img src="/icon.svg" className="w-8" />
            <p className="font-bold text-zinc-600">Ideologia</p>
          </div>
        </nav>
        <main className="absolute sm:left-1/2 sm:translate-x-[-50%] sm:p-4 flex flex-col justify-center max-sm:w-full">
          <header className="mt-12">
            <div >
              <h1 className="max-sm:pl-4 py-4 text-left text-zinc-600 font-bold text-4xl">
                <p>
                  Faça Login na 
                </p> 
                <p>
                  Plataforma
                </p>
              </h1>
            </div>
          </header>
          <form onSubmit={ handleLogin } className="flex justify-center">
            <div className="flex justify-center items-center flex-col gap-2 max-sm:w-[calc(100%_-_16px)]">
              <input required ref={ inputEmailRef } placeholder="Email" type="email" className="bg-transparent -zinc-600  text-xl max-sm:w-full focus:border-zinc-600 focus:shadow-[0_0_2px_rgb(161,161,170)] outline-none indent-4 w-96 h-14 border rounded-full border-zinc-400" />
              <div   ref={ divPasswordRef } className="text-xl max-sm:w-full w-96 h-14 border rounded-full flex items-center border-zinc-400">
                <input required placeholder="Senha" ref={ inputPasswordRef } type="password" className="bg-transparent text-zinc-600 indent-4 w-[88%] outline-none rounded-full" />
                <button onClick={ handleVisiblePassword } type="button" className="w-10 h-10 flex justify-center mr-2 items-center rounded-full"> 
                  {  visiblePassword && <Eye size={ 24 } className="text-zinc-600" /> }
                  { !visiblePassword && <EyeSlash size={ 24 } className="text-zinc-600" /> }
                </button>
              </div>
              <div className="max-sm:w-full =">
                <button className="text-xl text-zinc-50 font-bold max-sm:w-full w-96 h-14 rounded-full transition-colors bg-zinc-500 hover:bg-zinc-600">
                  Log in
                </button>
              </div>
              <div>
                <p>
                  <a className="text-zinc-400 ">
                    Ainda Não sou Aluno
                  </a>
                </p>
              </div>
            </div>
          </form>
          <Toaster />
        </main>
      </div>
    </Fragment>
  )
}