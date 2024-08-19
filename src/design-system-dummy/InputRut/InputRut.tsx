
import { useState  } from 'react';
import { useField  } from 'formik';
import { TextField } from '@mui/material';
import { DICTONARY } from '../../config';
import './inputRut.module.css';

interface Props {
  InputProps?: any;
  classContent?: string;
  classInput?: string;
  color?: any;
  disabled?: boolean;
  error?: any;
  estado?: any;
  focused?: boolean;
  fullWidth?: boolean;
  label: string;
  name: string;
  onBlur?: (event: any) => void;
  onChange: (event: any) => void;
  placeholder?: string;
  setFieldValue: (name: string, value: any) => void;
  touched?: boolean;
  type?: string ;
  variant?: any;
  setFieldTouched: (
    name: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
  [x:string]: any; // puede resibir cualquier cosa
}

export const InputRut = ( {
  label,
  ...props }: Props) => {
    const [rut, setRut] = useState('');
  // la metada nos dira si ha sido tocado , hay errores etc
  const [field] = useField(props);

  const {
    InputProps,
    classContent,
    classInput,
    color,
    disabled,
    error,
    estado, 
    focused,
    fullWidth,
    name,
    onBlur,
    onChange,
    placeholder,
    setFieldTouched,
    setFieldValue,
    touched, 
    type,
    variant,
    
  } = props;

    const getIcon = (tipo:string) => {
      const TIPO = tipo.toUpperCase();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const BASE = DICTONARY.ESTADO[TIPO];
      return <BASE.ICONO className="mr-1" />;
    };

  return (
    <div className={classContent || ''}>
      <TextField 
          {...field}
          id={'rut'}
          label={label}
          disabled={disabled}
          value={rut}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            setRut(inputValue);
            setFieldValue(field.name,inputValue);
          }}
          className={`${classInput || 'w-full'}`}
          placeholder={placeholder}
          type={type}
          onBlur={onBlur}
          error={touched && error ? true : false}
          helperText={touched && estado && error ? estado.mensaje : null}
          InputProps={
            touched && estado && error
            ? { endAdornment: getIcon(estado.tipo) }
            : InputProps
          }
          color={color}
          focused={focused}
          fullWidth={fullWidth}
          variant={variant || 'outlined'}
          rows={4}
     
 
        />
    
    </div>
  )
}
