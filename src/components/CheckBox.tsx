import { Checkbox as MaterialCheckBox } from "@mui/material";

interface CheckboxProps {
  label:string
  id:string
}

export function CheckBox(props:CheckboxProps){
  return  (
    <div className="w-[320px] flex items-center justify-start py-2">
      <MaterialCheckBox className="m-0 p-0 w-auto h-auto" {...props} defaultChecked size="medium" />
      <label className="px-2" htmlFor={props.id}>
        { props.label }
      </label>
    </div>
  )
}