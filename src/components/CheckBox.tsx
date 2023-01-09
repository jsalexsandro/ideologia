import { Checkbox as MaterialCheckBox } from "@mui/material";

interface CheckboxProps {
  label:string
  id:string
}

export function CheckBox(props:CheckboxProps){
  return  (
    <div className="w-[320px] flex items-center justify-start py-1">
      <MaterialCheckBox className="max-sm:text-white" style={{ width:"auto", height:"auto",padding:"0"}} 
      label {...props} defaultChecked size="medium"
      />
      <label className="px-2 max-sm:text-white" htmlFor={props.id}>
        { props.label }
      </label>
    </div>
  )
}