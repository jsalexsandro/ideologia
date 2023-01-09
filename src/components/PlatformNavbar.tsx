import { useState } from "react"
import { List, UserCircle, WhatsappLogo } from  "phosphor-react"
import { ExitPlatform } from "../services/exitPlatform"

type PlatformNavbarTYPE = {
  name: string,
  avatarUrl: string
}

export function PlatformNavbar({ name, avatarUrl }: PlatformNavbarTYPE){
  const [open, setOpen] = useState(false)

  const firstName = name.split(' ')[0]

  function Modal(){
    return (
      <div className="sm:hidden absolute top-20 right-4 shadow-[0_0_2px_rgb(161,161,170)] rounded-2xl p-2">
        <div className="flex items-center divide-x-2 rounded-full border px-2 min-w-[200px]">
          <span className="w-12 h-12 justify-center outline-none flex items-center justify-cente pr-2">
            <UserCircle size={40} weight="fill" className="text-zinc-600"/>
            { avatarUrl && <img className="rounded-full w-[40px]"  src={avatarUrl} />}

          </span>
          <p className="pl-2 text-zinc-600">
            Olá, { firstName }
          </p>
        </div>
        <section>
          <ul className="flex flex-col cursor-pointer justify-center px-2 py-2  text-zinc-600">
            <li className="border-b py-2 border-zinc-200 flex justify-between">
              <a>Cursos</a>
              <p  className="pl-2">
                <WhatsappLogo className="text-green-500" size={28} weight="fill" />
              </p>
            </li>
            <li  className="border-b py-2 border-zinc-200">
              <a>Pagamentos</a>
            </li>
            <li  className="border-b py-2 border-zinc-200">
              <a>Historico</a>
            </li>
            <li className="text-red-500 py-2">
              <button onClick={() => { ExitPlatform(null); location.reload() }}>
                Sair
              </button>
            </li>
          </ul>
        </section>
      </div>
    )
  }

  return (
    <>
      <nav className="bg-white w-full h-16 flex items-center border-b border-zinc-200">
        <div className="px-4 flex items-center">
          <img src="/icon.svg" className="w-8" />
          <p className="pl-2 text-xl text-zinc-600 font-bold">Ideologia</p>
        </div>
        <div className="max-sm:hidden absolute h-16 top-0 left-1/2 translate-x-[-50%] flex items-center">
          <ul className="flex items-center cursor-pointer justify-center divide-x-2 px-4 py-2 shadow-sm rounded-full border border-zinc-200  text-zinc-600">
            <li className="pr-2">
              <a>Cursos</a>
            </li>
            <li className="px-2">
              <a>Pagamentos</a>
            </li>
            <li className="px-2">
              <a>Historico</a>
            </li>
            <p  className="pl-2">
              <WhatsappLogo className="text-green-500" size={32} weight="fill" />
            </p>
          </ul>
        </div>
        <div className="sm:hidden right-0 absolute w-16 h-16 flex rounded-full items-center justify-center">
          <button onClick={() => setOpen(!open)} className={`${open && "bg-zinc-50"} w-12 h-12 outline-none flex items-center justify-center rounded-full border border-zinc-200`}>
            <List size={32} className="text-zinc-600" />
          </button>
        </div>
        <div className="max-sm:hidden right-0 absolute w-16 flex items-center justify-center h-16">
          <button className="w-12 h-12 outline-none flex items-center justify-center rounded-full border border-zinc-400">
            <UserCircle size={40} weight="fill" className="text-zinc-600"/>
            { avatarUrl && <img  className="rounded-full"  src={avatarUrl} /> }
          </button>
        </div>
        { open && <Modal /> }
      </nav>
    </>
  )
}