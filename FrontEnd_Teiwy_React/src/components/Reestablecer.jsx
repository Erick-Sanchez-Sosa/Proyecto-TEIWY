import React, {useState} from 'react';
import {Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,
        Boton,MensajeExito,MensajeError,ContenedorCorreo,ContenedorPassword,LabelTeiwy,ContenedorBoton2,Boton2,LabelEslogan,LabelBlanco,GrupoLabelVerde} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from '../componentes/Input';





const Reestablecer = () => {

  //Estados
  const [nombre,cambiarNombre]=useState({campo: '',valido:null});
  const [apellido,cambiarApellido]=useState({campo: '',valido:null});
  const [correo,cambiarCorreo]=useState({campo: '',valido:null});
  const [password,cambiarPassword]=useState({campo: '',valido:null});
  const [password2,cambiarPassword2]=useState({campo: '',valido:null});
  const [terminos,cambiarTerminos]=useState(false);
  const [formularioValido,CambiarFormularioValido]=useState(null);


  //Expresiones regulares
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  };

  //validarPassword2
  const validarPassword2 = () => {
    if(password.campo.length>0){
        if(password.campo!==password2.campo){
            cambiarPassword2((prevState) => {
              return {...prevState,valido:'false'}
            });
        }else{
            cambiarPassword2((prevState) => {
              return {...prevState,valido:'true'}
            });
        }
    }

  };
  
  //onChangeTerminos
  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  };

  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if(
      nombre.valido==='true' && 
      apellido.valido==='true' &&
      correo.valido==='true' && 
      password.valido==='true' && 
      password2.valido==='true' && 
      terminos
      ){
        CambiarFormularioValido(true);
        cambiarNombre({campo:'',valido:null});
        cambiarApellido({campo:'',valido:null});
        cambiarCorreo({campo:'',valido:null});
        cambiarPassword({campo:'',valido:null});
        cambiarPassword2({campo:'',valido:null});

        //Aqui podemos agregar la conection con base de datos

    }
    else{
        CambiarFormularioValido(false);
    }
  };

  return (
      <main>
        <Formulario action="" onSubmit={onSubmit}>
            <ContenedorPassword>
                <LabelTeiwy>
                  TEIWY
                </LabelTeiwy>
            </ContenedorPassword>
            
            <ContenedorPassword>
                <LabelEslogan>
                  Explora , compra , vende
                </LabelEslogan>
            </ContenedorPassword>


            <LabelBlanco>
                  Introduce tu correo para buscar tu cuenta
            </LabelBlanco>
                      
            <ContenedorCorreo>
                <ComponenteInput
                  estado={correo}
                  cambiarEstado={cambiarCorreo}
                  tipo="email"
                  label="Correo"
                  placeholder="Correo"
                  name="correo"
                  leyendaError="El correo solo puede contener letras, numeros, puntos y guiones y guion bajo."
                  expresionRegular={expresiones.correo}
                />            
            </ContenedorCorreo>

  
            <ContenedorBoton2>
                <Boton type="button">Buscar</Boton>
                {formularioValido===true && <MensajeExito>Formulario Enviado Exitosamente!</MensajeExito>}
            </ContenedorBoton2>

            <ContenedorBoton2>
                <Boton type="button">Cancelar</Boton>
                {formularioValido===true && <MensajeExito>Formulario Enviado Exitosamente!</MensajeExito>}
            </ContenedorBoton2>
            



        </Formulario>



      </main>

      


    );
};




 
export default Reestablecer; 

