import ButtonMaterial from "@mui/material/Button"
import { Stack } from "phosphor-react";
import { CSSProperties } from "react";

interface ButtonProps {
  children: any
  style?:CSSProperties
  type?:"submit" | "button" | "reset" 
}

export function Button(props: ButtonProps){
  return (
      <ButtonMaterial {...props} />
  )
}