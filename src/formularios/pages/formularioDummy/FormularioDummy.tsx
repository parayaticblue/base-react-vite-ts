import React from 'react'
import { Formik, Form } from 'formik';

import {
  InputComponent,
  TitleComponent,
  SubtitleComponent,
  CardComponent,
  InputRut
} from '../../../design-system-dummy';

import { SchemaFormularioDummy } from './schema';


export const FormularioDummy = () => {
  
  const [isValidRut, setIsValidRut] = React.useState<boolean>(false);
  return (
    <>
      <TitleComponent
        title={'Formulario Dummy'}
        type={'h1'}
        size={'lg'}
        font={'bold'}
        fontFamily={'sans-serif'}
        typeLetter={'capitalize'}
        className={'text-left text-gray-700'}
      />

      <SubtitleComponent
        title={'Formulario de prueba para probar el funcionamiento de Formik'}
        type={'span'}
        size={'sm'}
        font={'normal'}
        fontFamily={'sans-serif'}
        typeLetter={'capitalize'}
        className={'text-left text-gray-700'}
      />



      <Formik
        initialValues={{
          name: '',
          email: '',
          rut: '',
          numberDoc: 0,
        }}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SchemaFormularioDummy}
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
              //  console.log('event :>> ', event);
              // console.log('errors :>> ', errors);
              console.log('values :>> ', values);
              // console.log('touched :>> ', touched);
            }}
            className="w-full bg-slate-100 min-h-screen mt-5 px-5 py-10"
          >

            <CardComponent
              className={ 
                ` 
                grid 
                grid-cols-3
                gap-4
                `
              }
            >
            
             <InputComponent
                label="Nombre"
                name="name"
                classContent="
                xxs:col-span-1
                xs:col-span-12 
                sm:col-span-4 
                md:col-span-1
                lg:col-span-1
                xl:col-span-1
                2xl:col-span-1
                h-20
                "
                autoFocus={true}
                classInput="bg-white w-full"
                disabled={false}
                placeholder="Ingrese su nombre"
                type="text"
                value={values.name || ''}
                onChange={handleChange}
                onBlur={() => setFieldTouched('name')}
                error={errors.name ? errors.name : null}

                estado={
                  errors.name
                    ? {
                      tipo: 'error',
                      mensaje: errors.name
                    }
                    : null
                }
                touched={touched.name}
              />
             <InputComponent
                label="Correo electronico"
                name="email"
                classContent="
                xxs:col-span-1
                xs:col-span-12 
                sm:col-span-4 
                md:col-span-1
                lg:col-span-1
                xl:col-span-1
                2xl:col-span-1
                h-20
                "
                classInput="bg-white w-full"
                disabled={false}
                placeholder="Ingrese su correo electronico"
                type="text"
                value={values.email || ''}
                onChange={handleChange}
                onBlur={() => setFieldTouched('email')}
                error={errors.email ? errors.email : null}

                estado={
                  errors.email
                    ? {
                      tipo: 'error',
                      mensaje: errors.email
                    }
                    : null
                }
                touched={touched.email}
              />
             <InputRut
                label="Rut"
                name="rut"
                classContent="
                xxs:col-span-1
                xs:col-span-12 
                sm:col-span-4 
                md:col-span-1
                lg:col-span-1
                xl:col-span-1
                2xl:col-span-1
                h-20
                "
                classInput="bg-white w-full"
                disabled={false}
                placeholder="12345678-9"
                type="text"
                value={values.rut || ''}
                onChange={handleChange}
                onBlur={() => setFieldTouched('rut')}
                error={errors.rut ? errors.rut : null}
                setFieldTouched={setFieldTouched}
                setFieldValue={setFieldValue}
                estado={
                  errors.rut
                    ? {
                      tipo: 'error',
                      mensaje: errors.rut
                    }
                    : null
                }
                touched={touched.rut}
              />
            </CardComponent>

            <CardComponent
              className={ 
                ` 
                grid 
                grid-cols-3
                gap-4
                mt-2
                `
              }
            >
            <InputComponent
                autoComplete="off"
                autoFocus={true}
                classes={{
                  root: 'bg-trasparent',
                  input: 'bg-white',
                  label: 'bg-white text-white',
                  focused: 'bg-primary',
                  disabled: '',
                }}
                color="primary"
                label="n° doc"
                name="number"
                classContent="
                xxs:col-span-1
                xs:col-span-12 
                sm:col-span-4 
                md:col-span-1
                lg:col-span-1
                xl:col-span-1
                2xl:col-span-1
                h-20
                "
                classInput="bg-white w-32"
                disabled={false}
                placeholder="Ingrese el numero de documento"
                type="number"
                value={values.numberDoc || ''}
                onChange={handleChange}
                onBlur={() => setFieldTouched('numberDoc')}
                error={errors.numberDoc ? errors.numberDoc : null}

                estado={
                  errors.numberDoc
                    ? {
                      tipo: 'error',
                      mensaje: errors.numberDoc
                    }
                    : null
                }
                touched={touched.numberDoc}
              />
             
            </CardComponent>
            
         
          </Form>
        )}
      </Formik>
    </>
  )
}
