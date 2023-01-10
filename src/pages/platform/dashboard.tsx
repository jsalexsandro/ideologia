import { FormEvent, Fragment, useRef } from "react"
import { GetServerSidePropsContext } from "next"
import { getAccess } from "../../services/getAccess"
import { MagnifyingGlass } from "phosphor-react"

export default function Dashboard(){
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSearch(e: FormEvent){
    e.preventDefault();
    const inputValue =  inputRef.current.value

    location.href += "?name="+inputValue
  }

  return (
    <Fragment>
      <main>
        <form onSubmit={ handleSearch }>
          <section className="flex justify-center items-center py-2">
            <div className="max-sm:w-[calc(100%_-_16px)] flex border w-[300px] h-12 justify-center border-zinc-400 rounded-full"> 
              <input ref={ inputRef }  placeholder="Pequisar Aluno" className="text-zinc-400 w-[88%] h-full rounded-full outline-none indent-4"  type="text" />
              <button className="w-14 flex items-center justify-center">
                <MagnifyingGlass size={32} className="text-zinc-400" />
              </button>
            </div>
          </section>
        </form>  
      </main>
    </Fragment>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext){
  const access = await getAccess(context, "dashboard")
  if (!access.props.permited){
    return access
  }

  const user = context.query.name
  // fazer api de get * users 
  

  return access
}