import type { NextPage } from 'next'
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import {AiFillEye} from 'react-icons/ai'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import LogoImg from '../components/images/logo.component';
import LoginError from '../components/errors/login.error';
import UserModel from '../models/user.model';
import CreateUserSchema from '../schemas/create-user.schema';
import BodyStruct from '../components/structs/page.struct';



const Register: NextPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<UserModel>(
        {
          defaultValues: {
            name:"",
            password: "",
            email:"",
            number:"",
            repeatPassword:"",
          },
          resolver: yupResolver(CreateUserSchema)
        }
        );
      
        const onSubmit: SubmitHandler<UserModel> = data => {
          console.log(data)
        };
    return (
        <BodyStruct>
            <>
            <h2 className='titleCard'>Cadastre-se</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.name? 'text-red-500': 'text-cyan-600'}>Nome</label>
                  <input className={'border-2 w-full'} {... register("name") } />
              </div> 

              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.name? 'text-red-500': 'text-cyan-600'}>E-mail</label>
                  <input className={'border-2 w-full'} {... register("email") } />
              </div>

               <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.name? 'text-red-500': 'text-cyan-600'}>Número</label>
                  <input className={'border-2 w-full'} {... register("number") } />
              </div>  
    
              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.password? 'text-red-500': 'text-cyan-600'}>Senha</label>
                  <div className={'relative'}>
                  <AiFillEye className={'absolute right-2 top-[20%] text-cyan-600'} />
                  <input className={'border-2 w-full'} type={'password'} {... register('password')} />
                  </div>
              </div> 
              <div className={'flex flex-col justify-center input'} >
                  <label className={ errors.password? 'text-red-500': 'text-cyan-600'}>Repitir Senha</label>
                  <div className={'relative'}>
                  <AiFillEye className={'absolute right-2 top-[20%] text-cyan-600'} />
                  <input className={'border-2 w-full'} type={'password'} {... register('repeatPassword')} />
                  </div>
              </div> 
    
              <div className={'flex justify-center'}>
                  <button className={'buttonCard'} type={'submit'} >Cadastrar</button>
                </div>
    
                <div className={'flex flex-col items-center my-2'} > 
                  <p className={'text-xs'}>Ainda não é clinte Disparo Pro ?</p>
                  <Link href="/login">
                    <a className={'text-cyan-600 text-xs'}>Fazer Login</a>
                  </Link>
    
                </div>
              { (errors.name && errors.password) &&  <LoginError/>}
              </form>
              </>
        </BodyStruct>
      )
}


export default Register;