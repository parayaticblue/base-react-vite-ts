import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../..";
import { Formik, Field, ErrorMessage, Form, FormikValues } from 'formik';
import styles from './login.module.css';

import {  
  InputComponent,
  InputPasswordComponent 
} from '../../../design-system-dummy';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as Yup from 'yup';
export const LoginPage = () => {

  // utilizamos useContext para obtener la información de autenticación

  const { login } = useContext(AuthContext);
  

  // Utilizamos el hook useNavigate para navegar a la ruta /marvel
  const navigate = useNavigate();
  // const handleSubmit = (values: LoginFormValues) => {
  //   // Aquí puedes manejar la lógica de inicio de sesión
  //   console.log(values);
  //   handleLogin()
  // };
  
  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Peter Araya');
    
    navigate(lastPath, { replace: true });

  }
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.subMain}`}>
        <h2 className={`${styles.title}`}>Inicio de sesión</h2>
        <Formik
          initialValues={
            
            { 
              email: '', 
              password: '' 
            }
          }
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={
            Yup.object().shape({
              email: Yup.string()
                .trim()
                .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'El correo no es valido')
                .required('El correo es requerido'),
              password: Yup.string()
                .trim()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es requerida'),
              // password2: Yup.string()
              //   .trim()
              //   .oneOf([Yup.ref('password1'), ''], 'Passwords must match')
              //   .required('Confirm Password is required'),
            })
          }
          
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            handleLogin()
            resetForm();
          }}
        >
          {({
          values,
          errors,
          touched,
          handleChange,
          handleReset,
          handleSubmit,
          setFieldValue,
          handleBlur,
          setFieldError,
          setFieldTouched,
          isSubmitting,
          validateForm
        }) => (
            <Form
            onChange={event => {
              console.log('errors :>> ', errors);
              console.log('values :>> ', values);
              console.log('touched :>> ', touched);
            }}
            
            >
              
              <div className={`${styles.mainForm}`}>
            
              <div className={`${styles.inputForm}`}>
                <InputComponent 
                    className=""
                    touched={touched.email}
                    error={errors.email ? errors.email : null}
                    fullWidth
                    label={'Correo electrónico'}            
                    name={'email'}     
                    placeholder="asdf@gmail.com"     
                    type="email"
                    variant="outlined"   
                    color={(touched.email && !errors.email) ? 'success' : 'error'}
  
                    focused 
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }} 
                    estado={
                      errors.email 
                      ? { 
                        tipo: 'error', 
                        mensaje: 'Debe ingresar un correo electrónico válido' 
                       } 
                      : null
                    }
                  />
                </div>
                
                <InputPasswordComponent 
                    className="" 
                    touched={touched.password}
                    error={errors.password ? errors.password : null}
                    fullWidth
                    label={'Contraseña'}   
                    name="password"
                    variant="outlined"   
                    type='password'
                    placeholder="Ingrese su contraseña" 
                    estado={
                      errors.password 
                      ? { 
                        tipo: 'error', 
                        mensaje: 'Debe ingresar un password  válido' 
                       } 
                      : null
                    }
                  />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Iniciar sesión
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
