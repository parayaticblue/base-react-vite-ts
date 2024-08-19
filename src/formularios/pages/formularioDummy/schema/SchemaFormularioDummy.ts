import * as Yup from 'yup';
import { validaRutChileno } from '../../../../helpers';


 const SchemaFormularioDummy = Yup.object().shape({

  name:
       Yup
        .string()
        .lowercase()
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El nombre solo puede contener letras')
        .max(50, 'El nombre no puede tener mas de 50 caracteres')
        .min(5, 'El nombre no puede tener menos de 5 caracteres')
        .trim()
       .required('El nombre es obligatorio'),
  email: 
        Yup.string()
        .email('El correo no es valido')
        .lowercase()
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'El correo no es valido')
        .max(50, 'El correo no puede tener mas de 50 caracteres')
        .min(5, 'El correo no puede tener menos de 5 caracteres')
        .trim()
        .required('El correo es obligatorio'),
  rut: 
       Yup.string()
          .matches(/^[0-9]+[-]{1}[0-9kK]{1}$/, 'El rut no es valido')
          .required('El rut es obligatorio')
          .test('rut', 'RUT inválido', (value) => validaRutChileno(value))

});

export  { SchemaFormularioDummy }
