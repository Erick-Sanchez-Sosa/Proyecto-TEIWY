import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//Colores presentes en los labels
const colores = {
    borde: "#0075FF",
    error: "#BB2929",
    exito: "#1ED12D"
};
//El formulario
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-width: 800px){
        grid-template-columns: 1fr;
    }
`;
//Label
const Label = styled.label`
    display: block;
    font-weight:700;
    padding:10px;
    min-height: 40px;
    cursor:pointer;

    ${props => props.valido==='false' && css`
        color:${colores.error}; 
    `}
 
`;
//Label Teiwy
const LabelTeiwy = styled.label`
    font-size: 70px;
    color:#49C583;
    text-align: center;
    display: block;
    font-weight:700;
    padding:10px;
    min-height: 100px;
`;

//Label Eslogan
const LabelEslogan = styled.label`
    font-size: 45px;
    color:#49C583;
    text-align: center;
    display: block;
    font-weight:700;
    padding:10px;
    min-height: 50px;
`;

//Label blanco para ingresar el correo
const LabelBlanco = styled.label`
    font-size: 30px;
    color:#000;
    text-align: left;
    display: block;
    font-weight: bold;
    padding:20px;
    min-height: 10px;
    grid-column: span 2;
`;

//El div que contiene el Input y el icono
const GrupoInput=styled.div`
    position:relative;
    z-index:90;
`;

//El div que contiene el reestablecer contraseña
const GrupoLabelVerde=styled.div`
    background:#49C583;
    grid-column: span 2;
`;


//El icono
const Input=styled.input`
    width:100%;
    background:#FFF;
    border-redius:3px;
    height:45px;
    line-height:45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border:3px solid ${colores.borde};
        outline:none;
        box-shadow:3px 0px 30px rgba(163,163,163,0.4)
    }

    ${props => props.valido==='true' && css`
        border: 3px solid transparent; 
    `}
    ${props => props.valido==='false' && css`
        border: 3px solid ${colores.error} !important; 
    `}

`;

//Leyenda debajo del label
const LeyendaError=styled.p`
    font-size:12px;
    margin-bottom:0;
    color:${colores.error};
    display:none;

    ${props => props.valido==='true' && css`
        display:none; 
    `}
    ${props => props.valido==='false' && css`
        display:block; 
    `}
`;

//Icono
const IconoValidacion=styled(FontAwesomeIcon)`
    position:absolute;
    right:10px;
    bottom:14px;
    z-index:100;
    font-size:16px;
    opacity:0;

    ${props => props.valido==='false' && css`
        opacity:1;
        color:${colores.error};
    `}
    ${props => props.valido==='true' && css`
        opacity:1;
        color:${colores.exito};
    `}

`;

//contenedor de terminos y condiciones
const ContenedorTerminos=styled.div`
    grid-column: span 2;
    input{
        margin-right:10px;

    }
    
    @media (max-width:800px){
        grid-column:span 1;
    }
`;

//contenedor de boton centrado
const ContenedorBotonCentrado=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-column: span 2;

    @media (max-width:800px){
        grid-column:span 1;
    }
`;

//contenedor de boton Izquierda
const ContenedorBoton2=styled.div`
    height: 45px;
    line-height: 45px;
    padding: 0px 0px;
    border-radius: 4px;
    grid-column: span 1;

    @media (max-width:800px){
        grid-column:span 1;
    }
`;


//Boton Enviar
const Boton=styled.button`
    height: 45px;
    line-height:45px;
    width:30%;
    background:#49C583;
    color:#000;
    font-weight:bold;
    border:none;
    border-radius:3px;
    cursor:pointer;
    transition:.1s ease all;

    &:hover {
        box-shadow:3px 0px 30px rgba(163,163,163, 1);
    }
`;

//Boton 2
const Boton2=styled.button`
    align:left;
    height: 45px;
    line-height:45px;
    width:60%;
    background:#49C583;
    color:#000;
    font-weight:bold;
    border:none;
    border-radius:3px;
    cursor:pointer;
    transition:.1s ease all;

    &:hover {
        box-shadow:3px 0px 30px rgba(163,163,163, 1);
    }
`;


//Mensaje Exito
const MensajeExito=styled.p`
    font-size:14px;
    color:${colores.exito};
`;

//Mensaje Error
const MensajeError=styled.div`

    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p{
        margin:0;
        
    }

`;

const ContenedorCorreo=styled.div`

    grid-column: span 2;
    p{
        margin:0;  
    }

    @media (max-width:800px){
        grid-column:span 1;
    }

`;

const ContenedorPassword=styled.div`

    grid-column: span 2;
    p{
        margin:0;  
    }

    @media (max-width:800px){
        grid-column:span 1;
    }

`;



export{Formulario,Label,GrupoInput,Input,LeyendaError,
       IconoValidacion,ContenedorTerminos,ContenedorBotonCentrado,
       Boton,MensajeExito,MensajeError,ContenedorCorreo,
       ContenedorPassword,LabelTeiwy,LabelEslogan,ContenedorBoton2,Boton2,
       LabelBlanco,GrupoLabelVerde
        
};