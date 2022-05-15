import type { NextPage } from 'next'
import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form";
import {AiFillEye} from 'react-icons/ai'
import { yupResolver } from '@hookform/resolvers/yup';
import LogoImg from '../components/images/logo.component';
import LoginError from '../components/errors/login.error';
import LoginModel from '../models/login.model';
import LoginSchema from '../schemas/login.schema';
import BodyStruct from '../components/structs/page.struct';



const Login: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginModel>(
  {
    defaultValues: {
      userName:"",
      password: ""
    },
    resolver: yupResolver(LoginSchema)
  }
  );

  const onSubmit: SubmitHandler<LoginModel> = data => {
    console.log(data)
  };

  return (
    <BodyStruct>
        <>
        <h2 className='titleCard'>Login</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'flex flex-col justify-center input'} >
              <label className={ errors.userName? 'text-red-500': 'text-cyan-600'}>E-mail ou Celular</label>
              <input className={'border-2 w-full'} {... register("userName") } />
          </div> 

          <div className={'flex flex-col justify-center input'} >
              <label className={ errors.password? 'text-red-500': 'text-cyan-600'}>Senha</label>
              <div className={'relative'}>
              <AiFillEye className={'absolute right-2 top-[20%] text-cyan-600'} />
              <input className={'border-2 w-full'} type={'password'} {... register('password')} />
              </div>
          </div> 

          <div className={'flex justify-center'}>
              <button className={'buttonCard'} type={'submit'} >Conectar</button>
            </div>

            <div className={'flex flex-col items-center my-2'} > 
              <p className={'text-xs'}>Ainda não é clinte Disparo Pro ?</p>
              <Link href="/register">
                <a className={'text-cyan-600 text-xs'}>Criar Conta</a>
             </Link>
            </div>
          { (errors.userName && errors.password) &&  <LoginError/>}
          </form>
          </>

    </BodyStruct>
  )
}

export default Login;
