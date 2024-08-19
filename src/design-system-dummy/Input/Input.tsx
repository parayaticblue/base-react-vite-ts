
import { useField } from 'formik';
import { TextField } from '@mui/material';
import { DICTONARY } from '../../config';
import './input.module.css';
interface Props {
  InputProps?: any;
  autoComplete?: string;
  autoFocus?: boolean;
  classes?: object;
  classContent?: string;
  classInput?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
  // components?: object;
  defaultValue?: string;
  disabled?: boolean;
  error?: any;
  estado?: any;
  focused?: boolean;
  fullWidth?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  touched?: boolean;
  type?: string ;
  variant?: any;
  [x:string]: any; // puede resibir cualquier cosa
}


export const InputComponent = ( {
  label,
  ...props }: Props) => {

  // la metada nos dira si ha sido tocado , hay errores etc
  const [field] = useField(props);

  const {
    InputProps,
    autoComplete,
    autoFocus,
    classes,
    classContent,
    classInput,
    color,
    // components,
    defaultValue,
    disabled,
    error,
    estado, 
    focused,
    fullWidth,
    placeholder,
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
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <TextField 
          {...field} 
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          classes={classes}
          color={color}
          className={`${classInput || 'w-full'}`}
          defaultValue={defaultValue}
          disabled={disabled}
          label={label}
          placeholder={placeholder}
          type={type}
          error={touched && estado && error ? true : false}
          InputProps={
            touched && estado && error
            ? { endAdornment: getIcon(estado.tipo) }
            : InputProps
          }
          variant={variant || 'outlined'}
          helperText={touched && estado && error ? estado.mensaje : null}
          fullWidth={fullWidth}
          focused={focused}
        />
    
    </div>
  )
}
