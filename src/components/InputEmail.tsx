import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

interface InputEmailProps {
  placeholder: string
  id?: string
}

interface State {
  email: string;
}


export function InputEmail(props: InputEmailProps){
  const [values, setValues] = useState<State>({
    email: ''
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <FormControl className='sm:w-[450px] w-[320px]' variant="outlined">
    <InputLabel htmlFor={ props.id } >{ props.placeholder }</InputLabel>
    <OutlinedInput
      id={ props.id } 
      type="email"
      value={values.email}
      onChange={handleChange('email')}
      required
      label={ props.placeholder }
    />
  </FormControl>
  )
}