import { useState } from "react";
import { FieldError, FormState, UseFormRegister } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import LoginModel from "../../models/login.model";
import UserModel from "../../models/user.model";

interface Props{
    errors:FieldError|undefined
    register: UseFormRegister<any>;
    label: string;
    model: string;
}



const FieldPasswordInput = (props:Props)=>{
    const [hidePass, setHidePass] = useState('password');
    const hidePasswordFunc = ()=> setHidePass( hidePass == "password" ? 'text' : 'password' )
    
    return (
        <div className={'flex flex-col justify-center input'} >
                  <label className={ props.errors? 'text-red-500': 'color-text-title'}>{props.label}</label>
                  <div className={'relative'}>
                  <AiFillEye onClick={hidePasswordFunc} className={'absolute right-2 top-[20%] color-text-title'} />
                  <input className={'border-2 w-full'} type={hidePass} {... props.register(props.model)} />
                  </div>
              </div> 
    );
}

export default FieldPasswordInput;