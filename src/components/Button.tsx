import ButtonMaterial from "@mui/material/Button"

interface ButtonProps {
  children: any
  className?: string
  type?: "button" | "reset" | "submit"
}

export function Button(props: ButtonProps){

  return (
    <ButtonMaterial className={ props.className } type={ props.type } >
      { props.children } 
    </ButtonMaterial>
  )
}