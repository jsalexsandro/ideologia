import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Eye, EyeSlash } from "phosphor-react"
import { useState } from 'react';

interface InputPasswordProps {
  placeholder:string
  id?:string
}

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export function InputPassword(props: InputPasswordProps) {
  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <FormControl className='sm:w-[450px] w-[320px]' variant="outlined">
      <InputLabel className='max-sm:text-white'  htmlFor={ props.id }>{ props.placeholder }</InputLabel>
      <OutlinedInput
        className='max-sm:text-white'
        id={ props.id }
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        required
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Eye className='max-sm:text-white' /> : <EyeSlash className='max-sm:text-white' />}
            </IconButton>
          </InputAdornment>
        }
        label={ props.placeholder }
      />
    </FormControl>
  );
}