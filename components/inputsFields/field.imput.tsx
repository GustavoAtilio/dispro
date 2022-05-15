import { FieldError, FormState, UseFormRegister } from "react-hook-form";


interface Props{
    errors:FieldError|undefined
    register: UseFormRegister<any>;
    label: string;
    model: string;
}


const FieldInput = (props:Props)=>{   
    return (
        <div className={'flex flex-col justify-center input'} >
        <label className={ props.errors? 'text-red-500': 'color-text-title'}>{props.label}</label>
        <input className={'border-2 w-full'} {... props.register(props.model) } />
    </div> 
    );
}

export default FieldInput;