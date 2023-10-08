import React from 'react';
import {Label,Input,GrupoInput,LeyendaError,IconoValidacion} from './../elementos/Formularios';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark } from '@fortawesome/free-solid-svg-icons';


//Funcion que gestiona los inputs
const ComponenteInput = ({estado,cambiarEstado,tipo,label,placeholder,name,leyendaError,expresionRegular,funcion}) => {
    // Verifica que el estado exista
    if (!estado) {
        return null;
    };

    const expresionComparar=expresionRegular;
    const onChange = (e) =>{
        cambiarEstado({...estado, campo:e.target.value}); 
    };

    const validacion = (expresionRegular) => {
        if(expresionComparar){
            if(expresionComparar.test(estado.campo)){
                cambiarEstado({...estado,valido:'true'})
            } else {
                cambiarEstado({...estado,valido:'false'})
            }
        }
        if(funcion){
          funcion();
        }
 
    };

    return ( 
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input type={tipo} placeholder={placeholder} id={name}
                 value={estado.campo}
                 onChange={onChange}
                 onKeyUp={validacion}
                 onBlur={validacion}
                 valido={estado.valido}    
                 />
                <IconoValidacion
                    icon={estado.valido==='true' ? faCircleCheck : faCircleXmark}
                    valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
     );
}
 
export default ComponenteInput;

