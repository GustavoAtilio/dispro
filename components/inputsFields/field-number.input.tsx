import { FieldError, FormState, UseFormRegister } from "react-hook-form";
import Image from 'next/image';

interface Props{
    errors:FieldError|undefined
    register: UseFormRegister<any>;
    model: string;
}


const NumberFieldInput = (props:Props)=>{   
    return (
        <div className={'flex flex-col justify-center input'} >
                  <label className={ props.errors? 'text-red-500': 'color-text-title'}>Número</label>
                   <div className={'relative'}>
                   <div className={'absolute flex items-center top-1 mx-2'}> 
                   <Image className={'mx-2'}  src={'/assets/brazil.svg'} width={20} height={20} alt="logo" />
                    <select className={'mx-2 bg-transparent'}>
                        <option>++ 55 </option>
                    </select>
                   </div>
                  <input className={'border-2 w-full pl-[40%]'} {... props.register("number") } />
                   </div>
              </div> 
    );
}

export default NumberFieldInput;