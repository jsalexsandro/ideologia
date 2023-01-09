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
    <FormControl className='sm:w-[450px] w-[320px] border-zinc-600' variant="outlined">
    <InputLabel className='max-sm:text-white' htmlFor={ props.id } >{ props.placeholder }</InputLabel>
    <OutlinedInput 
      className='max-sm:text-white'
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