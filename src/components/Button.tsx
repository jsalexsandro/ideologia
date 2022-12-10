import ButtonMaterial from "@mui/material/Button"
import { Stack } from "phosphor-react";

interface ButtonProps {
  children: any
  className?: string
  type?: "button" | "reset" | "submit"
  color?:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" ;
}

export function Button(props: ButtonProps){
  return (
      <ButtonMaterial style={{ backgroundColor:"blue" }}>
        { props.children }
      </ButtonMaterial>
  )
}