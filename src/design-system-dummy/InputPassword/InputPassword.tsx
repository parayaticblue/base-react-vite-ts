import { useState } from 'react';
import { useField } from 'formik';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


import { FormControl, InputLabel, OutlinedInput } from '@mui/material';


interface Props {
  label: string;
  name: string;
  placeholder?: string;
  type?:  'text'|'password';
  touched?: boolean;
  [x:string]: any; // puede resibir cualquier cosa
}


export const InputPasswordComponent = ( {label,type, ...props }: Props) => {
 

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  // la metada nos dira si ha sido tocado , hay errores etc
  const [field, meta] = useField(props);

  return (
  <FormControl  variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput  
          id="outlined-smen-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"

                >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
          
          {...field} 
          {...props} 
        />      
    </FormControl>
  )
}
